import { userModel } from "@/db/models/user"
import { signUpValidator } from "@/utils/validators/auth"
import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { generateRefreshToken, generateLoginToken } from "@/utils/auth/tokens"
import bycrypt from 'bcrypt'
import { authConfig } from "@/config/auth"
import { NextResponse } from "next/server"




export const POST   = asyncWrapperApi(async (req  ) =>{
    const body = await  req.json()
        const  parsedBodyResult = signUpValidator.safeParse(body)
        
        if(parsedBodyResult.success === false)  return new Response(JSON.stringify(parsedBodyResult)  ,{
            status : StatusCodes.BAD_REQUEST , 
        } )

            const newPassword = await bycrypt.hash(parsedBodyResult.data.password  , authConfig.bycryptSaltRounds )
            parsedBodyResult.data.password = newPassword 
            const newUserDb = await userModel().create({ ...parsedBodyResult.data, verified : false })
            const newUser = {...newUserDb._doc}
            delete newUser.password
            const token =  generateLoginToken({ userId:  newUser._id.toString()})
            const refreshToken = await  generateRefreshToken(newUser._id.toString())
            const response =   NextResponse.json(
                {
                  ...newUser,
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
