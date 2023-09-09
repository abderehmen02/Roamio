import { userModel, userModelsMap } from "@/db/models/user";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper";
import { StatusCodes } from "http-status-codes";

export const POST =  asyncWrapperAuthorisedApi(async (req, userInfo)=>{
const userInfoModel = userInfo.authService ? userModelsMap[userInfo.authService] : userModel()
const dbUserInfo  = await  userInfoModel.findById(userInfo.userId)
console.log("db user ifno" , dbUserInfo )
return apiResponse(StatusCodes.CREATED , true )
})