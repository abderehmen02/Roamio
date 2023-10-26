import { GoogleUserDb, googleUserModel } from "@/db/models/googleUser";
import { UserDb, userModel } from "@/db/models/user";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { getUsersValidator } from "@/utils/validators/auth";
import { StatusCodes } from "http-status-codes";
import { NextRequest } from "next/server";


export const POST = async (req: NextRequest)=>{
    const body = await  req.json() ;
    const parsedBody  =  getUsersValidator.safeParse(body)
    if(!parsedBody.success) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("You should pass an array that contains the userId of the users that you want to get"))
    const users : UserDb[] | GoogleUserDb[] = [] ;
    for(let userId of parsedBody.data.users){
        if(userId){
        let user = await userModel().findById(userId) ;

        if(!user) user = await googleUserModel().findById(userId)
        // console.log("google or user" , userId , user)
        if(!user) return apiResponse(StatusCodes.NOT_FOUND   , errorMessage("can not find this user" + user ))
        users.push(user) }
    }
    return apiResponse(StatusCodes.OK , users)
}