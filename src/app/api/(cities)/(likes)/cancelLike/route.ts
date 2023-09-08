import { CityDb, cityModal} from "@/db/models/city"
import { errorMessage } from "@/utils/api/error"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi, asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper"
import { likesRequestValidator } from "@/utils/validators/cities"
import StatusCodes from 'http-status-codes'



export const PATCH = asyncWrapperAuthorisedApi(async (req , userInfo)=>{ 
    const body = await  req.json()
    const parsedBody   = likesRequestValidator.safeParse(body)
    if(!parsedBody.success)       return  apiResponse(StatusCodes.BAD_REQUEST , errorMessage("the request must include the userName of the user "))
    const  { city   } = parsedBody.data
    const cityInfo = await cityModal().findOne({name : city})
    if(!cityInfo) return  apiResponse(StatusCodes.BAD_REQUEST  , errorMessage("no city found in the database"))
    if(!cityInfo.likes.includes(userInfo.userId)) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("City is not liked yet!"))
    const newCityInfo = await cityModal().findOneAndUpdate({name :city } , { likes :  cityInfo.likes.filter((item : string )=>item !== userInfo.userId)  } , {new:  true} )
    
    return apiResponse(StatusCodes.CREATED , newCityInfo)
})