import { authConfig } from "@/config/auth";
import { userModel } from "@/db/models/user";
import { ResetPasswordTokenInfo, TokenTypes } from "@/types/auth/token";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi } from "@/utils/asyncWrapper";
import { sendResetPasswordEmail, sendVerifyEmail } from "@/utils/auth/email";
import { verifyLoginToken } from "@/utils/auth/tokens";
import ResponseStatuses, { StatusCodes } from 'http-status-codes'
import { redirect } from "next/navigation";


export const GET = asyncWrapperApi( async (req)=>{
const email = req.headers.get("email")
const  userDb = await userModel().findOne({email })
if(!userDb)return apiResponse(ResponseStatuses.NOT_FOUND  , errorMessage("can not find user . "))
const emailSent =  await sendResetPasswordEmail(userDb)   
if(emailSent === true) redirect("/resetPasswordEmailSent")
else return new Response(JSON.stringify(emailSent) , {status : StatusCodes.INTERNAL_SERVER_ERROR} )
})