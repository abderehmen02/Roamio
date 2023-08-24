import { GoogleUserDb, googleUserModel } from "@/db/models/googleUser"
import { errorMessage } from "@/utils/api/error"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { getGoogleAuthTokens } from "@/utils/auth/googleAuth/getGoogleAuthTokens"
import HttpStatusCodes  from "http-status-codes"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { authConfig } from "@/config/auth"
import { appConfig } from "@/config"
import { generateLoginToken, generateRefreshToken } from "@/utils/auth/tokens"
import { authServises } from "@/types/auth"



export const GET = asyncWrapperApi( async (req: Request)=>{
    const cookieStore = cookies()
    const {searchParams} = new URL(req.url)
    const code = searchParams.get("code")
    if(!code ) return apiResponse(HttpStatusCodes.NOT_FOUND , errorMessage("can not get the access token "))
    const { id_token }= await getGoogleAuthTokens(code  )
    const googleUser = jwt.decode(id_token)
    if(!googleUser || typeof googleUser === "string"  ) throw new Error("can not get the google user from the token")
    console.log("google user"  , googleUser)
    const {email ,  email_verified , family_name , picture , name , given_name} = googleUser
    if(!email_verified){
        return NextResponse.redirect(`${appConfig.url}/errors/google/unverifiedEmail`);   
    }
    const googleUserDb = await  googleUserModel().findOneAndUpdate<GoogleUserDb>({email } , { email,  family_name , picture , name , given_name} , {new : true , upsert: true} )
    const userId = googleUserDb._id.toString()
    const accessToken = generateLoginToken({userId   })
    const refreshToken = await generateRefreshToken(userId , authServises.GOOGLE )
    cookieStore.set(authConfig.tokenCookieName , accessToken , {httpOnly : true} )
    cookieStore.set(authConfig.refreshTokenCookieName , refreshToken ,{httpOnly : true} )
    return NextResponse.redirect("http://localhost:3000/dashboard");
    })