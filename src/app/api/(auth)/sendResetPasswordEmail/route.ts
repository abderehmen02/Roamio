import { authConfig } from "@/config/auth";
import { UserDb, userModel } from "@/db/models/user";
import { ResetPasswordTokenInfo, TokenTypes } from "@/types/auth/token";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi } from "@/utils/asyncWrapper";
import { sendResetPasswordEmail, sendVerifyEmail } from "@/utils/auth/email";
import { verifyLoginToken } from "@/utils/auth/tokens";
import { sendResetPasswordEmailValidator } from "@/utils/validators/auth";
import ResponseStatuses, { StatusCodes } from 'http-status-codes'
import { redirect } from "next/navigation";


const isEmail = (email : string) => {
    return String(email )
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


export const POST = asyncWrapperApi( async (req)=>{
const body = await req.json()
const parsedBody = sendResetPasswordEmailValidator.safeParse(body)
if(!parsedBody.success) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("Can not get the user identifier"))
let userDb : UserDb | null ;
const userIdentifier = parsedBody.data.userIdentifier
if(isEmail(userIdentifier)){
userDb  = await userModel().findOne({email : userIdentifier }) 
}
else {
userDb = await userModel().findOne({userName : userIdentifier})    
}
if(!userDb)return apiResponse(ResponseStatuses.NOT_FOUND  , errorMessage("can not find user . "))
const emailSent =  await sendResetPasswordEmail(userDb)   
if(emailSent === true) return apiResponse(StatusCodes.CREATED , {sent : emailSent})
else return new Response(JSON.stringify(emailSent) , {status : StatusCodes.INTERNAL_SERVER_ERROR} )
})