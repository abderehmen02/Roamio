import {  cityModal} from "@/db/models/city"
import { errorMessage } from "@/utils/api/error"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper"
import { likesRequestValidator } from "@/utils/validators/cities"
import StatusCodes from 'http-status-codes'



export const PATCH = asyncWrapperAuthorisedApi(async (req , userInfo)=>{ 
    const body = await  req.json()
    const parsedBody   = likesRequestValidator.safeParse(body)
    if(!parsedBody.success)       return  apiResponse(StatusCodes.BAD_REQUEST , errorMessage("the request must the city name of the post "))
    const  { city   } = parsedBody.data
    const cityInfo = await cityModal().findOne({name : city})
    if(!cityInfo) return  apiResponse(StatusCodes.BAD_REQUEST  , errorMessage("no city found in the database with the given name"))
    if(cityInfo.dislikes.includes(userInfo.userId)) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("you have already dislike this city"))
    const newCityInfo = await cityModal().findOneAndUpdate({name :city } , { likes : cityInfo.likes.filter((item : string)=>item !== userInfo.userId) , dislikes :  [ ...cityInfo.dislikes , userInfo.userId ] } , {new:  true} )
    
    return apiResponse(StatusCodes.CREATED , newCityInfo)
})