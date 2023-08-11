import { connectDbPromise } from "@/db/connect";
import { NextRequest, NextResponse } from "next/server";

type AsyncFunction<Args extends any[] = any[], Return = any> = (...args: Args) => Promise<Return>;

function asyncWrapper<Args extends any[], Return>(
  fn: AsyncFunction<Args, Return>
): (...args: Args) => Promise<Return> {
  return async function (...args: Args) {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      // You can handle or log errors here if needed
      throw error;
    }
  };
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
  