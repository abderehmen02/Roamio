
import {connectDbPromise}  from "@/db/connect"
import { userModel } from "@/db/models/user"
import { signUpValidator } from "@/utils/validators/auth"
import { NextApiRequest } from "next"
import { NextRequest, NextResponse  } from "next/server"
import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/asyncWrapper"





export const POST   = asyncWrapperApi(async (req  ) =>{
    console.log("getting a post req")
    let reqBody ;
    const body = await  req.json()
    console.log("body" , body)
        const  parsedBodyResult = signUpValidator.safeParse(body)
        if( parsedBodyResult.success === true){
            const newUser = await userModel().create(parsedBodyResult.data)
            console.log("new user" ,newUser)
            return new Response(JSON.stringify(newUser) , {
                status : StatusCodes.CREATED 
            })    
        }
        console.log("error" , parsedBodyResult.error)
        return new Response(JSON.stringify(parsedBodyResult)  ,{
            status : StatusCodes.INTERNAL_SERVER_ERROR 
        } )
        })
