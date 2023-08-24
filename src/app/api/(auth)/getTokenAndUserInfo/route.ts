import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import {  generateLoginToken } from "@/utils/auth/tokens"
import { authConfig } from "@/config/auth"
import { refreshTokenModel } from "@/db/models/refreshToken"
import { apiResponse } from "@/utils/api/nextResponse"
import { errorMessage } from "@/utils/api/error"
import { userModel } from '@/db/models/user'
import { AuthServices } from '@/types/auth'
import { googleUserModel } from '@/db/models/googleUser'



export const POST   = asyncWrapperApi(async (req  ) =>{
        const  refreshTokenCookie = req.cookies.get(authConfig.refreshTokenCookieName)
        console.log("refresh token cookies" , refreshTokenCookie)

        const  refreshToken = refreshTokenCookie?.value 

        if(!refreshToken) apiResponse( StatusCodes.BAD_REQUEST   , errorMessage("No refresh token found") )
        const tokenInfo = await  refreshTokenModel().findOne({
            token : refreshToken
         })
         console.log( "refresh token info"  , tokenInfo)
         if(!tokenInfo) return apiResponse( StatusCodes.NOT_FOUND , errorMessage("Can not get the token from the database")  )
         if(tokenInfo.authService == AuthServices.GOOGLE){
            console.log("google refresh token")
            const userInfo = await  googleUserModel().findById(tokenInfo.userId)
            console.log("user info" , userInfo)
            if(!userInfo) return apiResponse(StatusCodes.NOT_FOUND , errorMessage("Can not get the info of the user from the database") )
            const token = generateLoginToken({userId : tokenInfo.userId.toString() , authService : AuthServices.GOOGLE  })
            return apiResponse(  StatusCodes.OK , { ...userInfo._doc ,  token})
   
         }
           

         const userInfo = await  userModel().findById(tokenInfo.userId)
         console.log("user info"  , userInfo)
         if(!userInfo) return apiResponse(StatusCodes.NOT_FOUND , errorMessage("Can not get the info of the user from the database") )
         const token = generateLoginToken({userId : tokenInfo.userId.toString() , authService : AuthServices.NATIVE_USER  })
         return apiResponse(  StatusCodes.OK , { ...userInfo._doc ,  token})
        })
