import { NextRequest } from "next/server"
import { cookies } from 'next/headers'
import { authConfig } from "@/config/auth"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import ResponseStatuses from 'http-status-codes'
import { apiResponse } from "@/utils/api/nextResponse"
import { refreshTokenModel } from "@/db/models/refreshToken"
import { errorMessage } from "@/utils/api/error"

export const POST =  asyncWrapperApi( async (req)=>{
    const refreshToken = cookies().get(authConfig.refreshTokenCookieName)?.value
    if(!refreshToken)  errorMessage("no refresh token found")
    console.log("refresh token" , refreshToken)
    const deletedRefreshToken = await refreshTokenModel().deleteOne({token : refreshToken })
    console.log("deleted" , deletedRefreshToken)
    cookies().delete(authConfig.refreshTokenCookieName)
    return apiResponse(ResponseStatuses.OK)
})