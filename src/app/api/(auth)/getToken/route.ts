import { userModel } from "@/db/models/user"
import { signUpValidator } from "@/utils/validators/auth"
import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { generateRefreshToken, generateLoginToken } from "@/utils/auth/tokens"
import bycrypt from 'bcrypt'
import { authConfig } from "@/config/auth"
import { NextResponse } from "next/server"
import { refreshTokenModel } from "@/db/models/refreshToken"
import { apiResponse } from "@/utils/api/nextResponse"
import { errorMessage } from "@/utils/api/error"



export const POST   = asyncWrapperApi(async (req  ) =>{
        const  refreshTokenCookie = req.cookies.get(authConfig.refreshTokenCookieName)
        const  refreshToken = refreshTokenCookie?.value 
        console.log("refresh token" , refreshToken) 
        if(!refreshToken) apiResponse( StatusCodes.BAD_REQUEST   , errorMessage("No refresh token found") )

        const tokenInfo = await refreshTokenModel().findOne({
            token : refreshToken
         })
         console.log("token info" , tokenInfo)
         if(!tokenInfo) return apiResponse( StatusCodes.NOT_FOUND , errorMessage("Can not get the token from the database")  )
          const token = generateLoginToken({userId : tokenInfo.userId.toString()  })
          return apiResponse(  StatusCodes.CREATED , {token})
        })
