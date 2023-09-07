import { connectDbPromise } from "@/db/connect"
import { CityDb, historicalModal, modelsMap } from "@/db/models/city"
import { Categories, Category, Prices } from "@/types/prefrences"
import { errorMessage } from "@/utils/api/error"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { likesRequestValidator } from "@/utils/validators/cities"
import StatusCodes from 'http-status-codes'



export const POST = asyncWrapperApi(async (req )=>{ 
    const parsedBody   = likesRequestValidator.safeParse(req.body)
    if(!parsedBody.success)       return  apiResponse(StatusCodes.BAD_REQUEST , errorMessage("the request must include the userName of the user "))
    const {userName} = parsedBody.data
    const  
})


