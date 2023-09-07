import { connectDbPromise } from "@/db/connect";
import { NextRequest, NextResponse } from "next/server";




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
  


  export function asyncWrapperAutherisedApi(
    fn: ( req :  NextRequest)=>Promise<Response>
  ): (req: NextRequest) => Promise<Response | undefined > {
    return async function (req: NextRequest) {
      try {
        await connectDbPromise
        const token = req.headers.get("authorization")?.split(" ")[2] ;
        console.log("token" , token)
        const result = await fn(req);
        return result;
      } catch (error) {
        console.error( "error thrown :" ,  error)
      }
    };
  }
