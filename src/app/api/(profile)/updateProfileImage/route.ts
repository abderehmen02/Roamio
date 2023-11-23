import { googleUserModel } from "@/db/models/googleUser";
import { userModel } from "@/db/models/user";
import { AuthServices } from "@/types/auth";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper";
import { updateProfileImageValidator } from "@/utils/validators/profile";
import { StatusCodes } from "http-status-codes";
import { parse } from "path";

export const POST = asyncWrapperAuthorisedApi(async (req , userInfo )=>{
    console.log("getting the request")
    const {authService , userId} = userInfo
    const body = await req.json()
    const parsedBody = updateProfileImageValidator.safeParse(body)
    if(!parsedBody.success) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("can not get the profile image url"))
    const {imageUrl} = parsedBody.data
    if(authService === AuthServices.NATIVE_USER){
        const newUser =await  userModel().findByIdAndUpdate(userId , {profilePic : imageUrl} )
        return apiResponse(StatusCodes.CREATED , {newUser })
    }
    else if(authService === AuthServices.GOOGLE){
        const newUser = await googleUserModel().findByIdAndUpdate(userId , {profilePic : imageUrl} )
        return apiResponse(StatusCodes.CREATED , {newUser})
    }
    return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not identify the auth service"))
})