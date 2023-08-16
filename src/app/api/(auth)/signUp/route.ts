import { userModel } from "@/db/models/user"
import { signUpValidator } from "@/utils/validators/auth"
import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { generateToken } from "@/utils/auth/tokens"





export const POST   = asyncWrapperApi(async (req  ) =>{
    const body = await  req.json()
        const  parsedBodyResult = signUpValidator.safeParse(body)
        if( parsedBodyResult.success === true){
            const newUser = await userModel().create(parsedBodyResult.data)
            console.log( "new user " , newUser)
            return new Response(JSON.stringify(newUser) , {
                status : StatusCodes.CREATED 
            })    
        }


        return new Response(JSON.stringify(parsedBodyResult)  ,{
            status : StatusCodes.BAD_REQUEST , 
        } )
        })
