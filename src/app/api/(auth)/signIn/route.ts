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
    const body = await req.json()
    const parsedBodyResult = signInValidator.safeParse(body)
    if(!parsedBodyResult.success) return  apiResponse(StatusCodes.BAD_REQUEST , parsedBodyResult.error )
    const {userName , password} = parsedBodyResult.data
    const user = await userModel().findOne({userName})
    if(!user) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signInFieldErrors.noUserFound.shortMessage))
    const isPasswordTrue = await  bycrypt.compare(password , user.password )
    if(!isPasswordTrue)  return apiResponse(StatusCodes.BAD_REQUEST , errorMessage(signInFieldErrors.incorrectPassword.shortMessage) ) 
    const token = generateLoginToken({userId : user._id.toString() })
    const refreshToken = await  generateRefreshToken(user._id.toString() )
    const response =   NextResponse.json(
        {
          ...user._doc,
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