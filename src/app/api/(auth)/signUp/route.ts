import { userModel } from "@/db/models/user"
import { signUpValidator } from "@/utils/validators/auth"
import StatusCodes from 'http-status-codes'
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { generateRefreshToken, generateToken } from "@/utils/auth/tokens"
import bycrypt from 'bcrypt'
import { authConfig } from "@/config/auth"




export const POST   = asyncWrapperApi(async (req  ) =>{
    const body = await  req.json()
        const  parsedBodyResult = signUpValidator.safeParse(body)
        if( parsedBodyResult.success === true){
            const newPassword = await bycrypt.hash(parsedBodyResult.data.password  , authConfig.bycryptSaltRounds )
            parsedBodyResult.data.password = newPassword 
            const newUser = await userModel().create(parsedBodyResult.data)
            const token = generateToken(newUser._id.toString())
            const refreshToken = await  generateRefreshToken(newUser._id.toString())


            return new Response(JSON.stringify(newUser) , {
                status : StatusCodes.CREATED 
            })    
        }


        return new Response(JSON.stringify(parsedBodyResult)  ,{
            status : StatusCodes.BAD_REQUEST , 
        } )
        })
