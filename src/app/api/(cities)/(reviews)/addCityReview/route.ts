import { cityModal } from "@/db/models/city";
import { userModel, userModelsMap } from "@/db/models/user";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper";
import { cityReviewRequestValidator } from "@/utils/validators/cities";
import { StatusCodes } from "http-status-codes";
import {experimental_useOptimistic} from 'react'
export const POST =  asyncWrapperAuthorisedApi(async (req, userInfo)=>{
const body = await req.json()
const parsedData  = cityReviewRequestValidator.safeParse(body) 
if(!parsedData.success) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("the request should include the name of the city and a review and it should be more than 1 character "))
const userInfoModel = userInfo.authService ? userModelsMap[userInfo.authService] : userModel()
const dbUserInfo  = await  userInfoModel.findById(userInfo.userId)
const userName = dbUserInfo.userName || dbUserInfo.given_name
const image = dbUserInfo.image || "/unknownPerson"
const newCity = await cityModal().findOneAndUpdate({name : parsedData.data.city  } ,{} )
return apiResponse(StatusCodes.CREATED , true )
})