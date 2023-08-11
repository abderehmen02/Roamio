
import {connectDbPromise}  from "@/db/connect"
import { userModel } from "@/db/models/user"
import { signUpValidator } from "@/utils/validators/auth"
import { NextApiRequest } from "next"
import { NextRequest, NextResponse  } from "next/server"
import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/validators/asyncWrapper"





export const POST   = asyncWrapperApi(async (req ) =>{
        const  reqBody = signUpValidator.safeParse(req.json())
        const newUser = await userModel().create(reqBody)
        console.log( "new user"  , newUser)
        return new Response(JSON.stringify(newUser) , {
            status : StatusCodes.CREATED 
        })
        })
