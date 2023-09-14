import { userModelsMap } from "@/db/models/user";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper";
import { saveCityValidator } from "@/utils/validators/cities";
import { StatusCodes } from "http-status-codes";

export const PATCH = asyncWrapperAuthorisedApi( async  (req , user)=>{    

    const body = await  req.json()
    const parsedBody = saveCityValidator.safeParse(body)
    if(!parsedBody.success) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("can not get the city from the body "))
    const newUserDb = await      userModelsMap[user.authService  || "NATIVE_USER"].findByIdAndUpdate(user.userId ,  { $push: { savedCities : parsedBody.data.city } }, 
    { new: true, upsert: true })
    if(newUserDb) return apiResponse(StatusCodes.CREATED , newUserDb)
    return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not update the user on the database"))
})