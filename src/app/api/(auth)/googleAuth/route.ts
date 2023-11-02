import { GoogleUserDb, googleUserModel } from "@/db/models/googleUser"
import { errorMessage } from "@/utils/api/error"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { getGoogleAuthTokens } from "@/utils/auth/googleAuth/getGoogleAuthTokens"
import HttpStatusCodes, { StatusCodes }  from "http-status-codes"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { authConfig } from "@/config/auth"
import { appConfig } from "@/config"
import { generateLoginToken, generateRefreshToken } from "@/utils/auth/tokens"
import { AuthService, AuthServices } from "@/types/auth"



export const GET = asyncWrapperApi( async (req: Request)=>{
    console.log("getting google auth request")
    const cookieStore = cookies()
    const {searchParams} = new URL(req.url)
    const code = searchParams.get("code")
    console.log("code" , code)
    if(!code ) return apiResponse(HttpStatusCodes.NOT_FOUND , errorMessage("can not get the access token "))
    const googleAuthData = await getGoogleAuthTokens(code  )
    return apiResponse( StatusCodes.OK , JSON.stringify({googleAuthData}))
    if(!googleAuthData) return apiResponse(StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not get the google auth data  ") )
    const {id_token} = googleAuthData
    const googleUser = jwt.decode(id_token)
    return apiResponse( StatusCodes.OK , errorMessage(JSON.stringify({googleUser})))
    // if(!googleUser || typeof googleUser === "string"  ) return apiResponse( StatusCodes.INTERNAL_SERVER_ERROR , errorMessage("can not get the google user from the token")) 
    // const {email , family_name , picture , name , given_name} = googleUser
    // const googleUserDb = await  googleUserModel().findOneAndUpdate<GoogleUserDb>({email } , { email,  family_name , picture , name , given_name} , {new : true , upsert: true} )
    // const userId = googleUserDb._id.toString()
    // const accessToken = generateLoginToken({userId  , authService: AuthServices.NATIVE_USER })
    // const refreshToken = await generateRefreshToken(userId , AuthServices.GOOGLE )
    // cookieStore.set(authConfig.tokenCookieName , accessToken , {httpOnly : true} )
    // cookieStore.set(authConfig.refreshTokenCookieName , refreshToken ,{httpOnly : true} )
    // return NextResponse.redirect(`${appConfig.url}${appConfig.links.home}`);
    })