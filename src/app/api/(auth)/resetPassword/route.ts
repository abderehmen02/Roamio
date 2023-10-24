import { userModel } from "@/db/models/user";
import { TokenTypes } from "@/types/auth/token";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi } from "@/utils/asyncWrapper";
import { verifyToken } from "@/utils/auth/tokens";
import { resetPasswordValidator } from "@/utils/validators/auth";
import { StatusCodes } from "http-status-codes";
import bycrypt from "bcrypt"
import { authConfig } from "@/config/auth";
export const POST = asyncWrapperApi( async  (req)=>{
const body = await req.json()
const parsedBody = resetPasswordValidator.safeParse(body)
if(!parsedBody.success) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("Can not parse the data"))
const {token , newPassword} = parsedBody.data
const tokenInfo = verifyToken(token)
if(typeof tokenInfo !== "object") throw new Error("can not get the token data")
if( tokenInfo === null) throw new Error("can not get the token data")
if(!("type" in tokenInfo))  throw new Error("can not get the token data")
if(    tokenInfo?.type  !== TokenTypes.RESET_PASSWORD ) throw new Error("This token is not for password reseting")
if(!("userId" in tokenInfo) || typeof tokenInfo.userId !== "string" ) throw new Error("can not get the user id from the token")
const newCrypedPassword = bycrypt.hash(newPassword , authConfig.bycryptSaltRounds )
const updatedUser = await  userModel().findByIdAndUpdate(tokenInfo.userId , {password: newCrypedPassword})
return apiResponse(StatusCodes.CREATED , {succuss : true})
})