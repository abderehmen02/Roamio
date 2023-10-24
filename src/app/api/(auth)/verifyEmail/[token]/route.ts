import { userModel } from "@/db/models/user";
import { apiResponse } from "@/utils/api/nextResponse";
import { verifyLoginToken } from "@/utils/auth/tokens";
import httpStatusCodes from "http-status-codes";
import {redirect} from "next/navigation"
export async function GET (req : Request  , { params : {token} }: { params: { token: string }}){
const {userId} = verifyLoginToken(token)
if(!userId) return new Response("your token has been expired! please login to resend another one" , {status : httpStatusCodes.BAD_REQUEST})
const userdb = await userModel().findByIdAndUpdate(userId  , {verified : true} , {new : true})
if(!userdb) return new Response("some error hapened . please try again")
if(userdb?.verified) redirect("/verifiedEmail")
}