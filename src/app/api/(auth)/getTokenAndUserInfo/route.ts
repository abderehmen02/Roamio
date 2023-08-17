import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import {  generateLoginToken } from "@/utils/auth/tokens"
import { authConfig } from "@/config/auth"
import { refreshTokenModel } from "@/db/models/refreshToken"
import { apiResponse } from "@/utils/api/nextResponse"
import { errorMessage } from "@/utils/api/error"
import { userModel } from '@/db/models/user'



export const POST   = asyncWrapperApi(async (req  ) =>{
        const  refreshTokenCookie = req.cookies.get(authConfig.refreshTokenCookieName)
        console.log("refresh token cookies" , refreshTokenCookie)

        const  refreshToken = refreshTokenCookie?.value 

        if(!refreshToken) apiResponse( StatusCodes.BAD_REQUEST   , errorMessage("No refresh token found") )
        const tokenInfo = await  refreshTokenModel().findOne({
            token : refreshToken
         })
         if(!tokenInfo) return apiResponse( StatusCodes.NOT_FOUND , errorMessage("Can not get the token from the database")  )
         const userInfo = await  userModel().findById(tokenInfo.userId)
         if(!userInfo) return apiResponse(StatusCodes.NOT_FOUND , errorMessage("Can not get the info of the user from the database") )
         const token = generateLoginToken({userId : tokenInfo.userId.toString()  })
         return apiResponse(  StatusCodes.OK , { ...userInfo._doc ,  token})
        })
