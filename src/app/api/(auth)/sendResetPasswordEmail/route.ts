import { authConfig } from "@/config/auth";
import { userModel } from "@/db/models/user";
import { ResetPasswordTokenInfo, TokenTypes } from "@/types/auth/token";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi } from "@/utils/asyncWrapper";
import { sendVerifyEmail } from "@/utils/auth/email";
import { verifyLoginToken } from "@/utils/auth/tokens";
import ResponseStatuses, { StatusCodes } from 'http-status-codes'
import { redirect } from "next/navigation";


export const GET = asyncWrapperApi( async (req)=>{
const  loginToken  = req.cookies.get(authConfig.tokenCookieName)?.value
if(!loginToken) return apiResponse(ResponseStatuses.BAD_REQUEST , errorMessage("can not get the token. make sure that you are logged in!"))
const {userId} = verifyLoginToken(loginToken) 
if(!userId) return apiResponse( ResponseStatuses.UNAUTHORIZED , errorMessage("Can not send the verify email message. please sign in first"))
const  userDb = await userModel().findById(userId)
if(!userDb)return apiResponse(ResponseStatuses.NOT_FOUND  , errorMessage("can not find user . "))
const emailSent =  await sendVerifyEmail(userDb)   
if(emailSent === true) redirect("/resetPasswordEmailSent")
else return new Response(JSON.stringify(emailSent) , {status : StatusCodes.INTERNAL_SERVER_ERROR} )
})