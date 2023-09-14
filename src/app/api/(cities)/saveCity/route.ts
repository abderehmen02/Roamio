import { userModelsMap } from "@/db/models/user";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper";
import { StatusCodes } from "http-status-codes";

export const PATCH = asyncWrapperAuthorisedApi( async  (req , user)=>{    
    const newUserDb = await      userModelsMap[user.authService  || "NATIVE_USER"].findByIdAndUpdate(user.userId ,  { $push: { savedCities : user.userId } }, 
    { new: true, upsert: true })
    if(newUserDb) return apiResponse(StatusCodes.CREATED , newUserDb)
    return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not update the user on the database"))
})