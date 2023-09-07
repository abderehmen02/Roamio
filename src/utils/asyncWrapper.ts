import { connectDbPromise } from "@/db/connect";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { verifyLoginToken } from "./auth/tokens";
import { apiResponse } from "./api/nextResponse";
import { StatusCodes } from "http-status-codes";
import { errorMessage } from "./api/error";
import { UserStoredWithToken } from "@/types/auth/token";
import { AuthService } from "@/types/auth";

export type AuthorizedUserInfo =  {
  userId : string , 
  authService : AuthService | undefined
}
export function asyncWrapperApi(
    fn: ( req :  NextRequest)=>Promise<Response>
  ): (req: NextRequest) => Promise<Response | undefined > {
    return async function (req: NextRequest) {
      try {
        await connectDbPromise
        const result = await fn(req);
        return result;
      } catch (error) {
        console.error( "error thrown :" ,  error)
      }
    };
  }
  


  export function asyncWrapperAuthorisedApi(
    fn: ( req :  NextRequest , userInfo : AuthorizedUserInfo )=>Promise<Response>
  ): (req: NextRequest) => Promise<Response | undefined > {
    return async function (req: NextRequest) {
      try {
        await connectDbPromise
        const header = req.headers.get("authorization")
        const token = req.headers.get("authorization")?.split(" ")[1] ;
        if(!token) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("can not get the token , make sure that you are loged in!"))
        const user = verifyLoginToken(token)
        const result = await fn( req ,{userId : user.userId , authService : user.authService} );
        return result;
      } catch (error) {
        console.error( "error thrown :" ,  error)
      }
    };
  }
