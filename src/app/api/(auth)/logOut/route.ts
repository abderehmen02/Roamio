import { NextRequest } from "next/server"
import { cookies } from 'next/headers'
import { authConfig } from "@/config/auth"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import ResponseStatuses from 'http-status-codes'
import { apiResponse } from "@/utils/api/nextResponse"
import { refreshTokenModel } from "@/db/models/refreshToken"
import { errorMessage } from "@/utils/api/error"

export const POST =  asyncWrapperApi( async (req)=>{
    console.log("logout request")
    const refreshToken = cookies().get(authConfig.refreshTokenCookieName)?.value
    console.log("refresh token geted")
    if(!refreshToken)  errorMessage("no refresh token found")
    console.log("continue") 
    const deletedRefreshToken = await refreshTokenModel().deleteOne({token : refreshToken })
    console.log("refresh token deleted from database")
    cookies().delete(authConfig.refreshTokenCookieName)
    console.log("refresh token deleted from cookies")
    return apiResponse(ResponseStatuses.OK)
})