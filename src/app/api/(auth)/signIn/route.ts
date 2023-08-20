import { userModel } from "@/db/models/user";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi } from "@/utils/asyncWrapper";
import { asyncWrapper } from "@/utils/clientAsyncWrapper";
import { signInValidator } from "@/utils/validators/auth";
import StatusCodes from 'http-status-codes'
import bycrypt from 'bcrypt'
import { signInFieldErrors } from "@/types/errors/auth";
import { generateLoginToken, generateRefreshToken } from "@/utils/auth/tokens";
import { NextResponse } from "next/server";
import { authConfig } from "@/config/auth";



export const POST  = asyncWrapperApi(async (req )=>{
    console.log("login request")
    const body = await req.json()
    console.log("body " , body ) 
    const parsedBodyResult = signInValidator.safeParse(body)
    console.log("parsed results" , parsedBodyResult)
    if(!parsedBodyResult.success) return  apiResponse(StatusCodes.BAD_REQUEST , parsedBodyResult.error )
    const {userName , password} = parsedBodyResult.data
console.log("username " , userName , password)
    const user = await userModel().findOne({userName})
    console.log("userdb" , user)
    if(!user) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signInFieldErrors.noUserFound.shortMessage))
    console.log("passwords" , password , user.password)
    const isPasswordTrue = await  bycrypt.compare(password , user.password )
console.log("is password true" , isPasswordTrue)
    if(!isPasswordTrue)  return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signInFieldErrors.incorrectPassword.shortMessage) ) 
    const token = generateLoginToken({userId : user._id.toString() })
    const refreshToken = await  generateRefreshToken(user._id.toString() )
   console.log("tokens" , token , refreshToken)

    const response =   NextResponse.json(
        {
          ...user,
          token 
        },
        { status: StatusCodes.CREATED }
      )
    
    response.cookies.set({
        name: authConfig.refreshTokenCookieName,
        value: refreshToken,
        httpOnly: true,
      })
    
      
    response.cookies.set({
        name: authConfig.tokenCookieName,
        value: token,
        httpOnly: true,
      })

    return response    






})