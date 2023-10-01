import { appConfig } from "@/config";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi } from "@/utils/asyncWrapper";
import { contactValidator } from "@/utils/validators/contact";
import { StatusCodes } from "http-status-codes";
import { NextRequest } from "next/server";
import sendGrid from '@sendgrid/mail'

const sendGridApi = process.env.SEND_GRID_API_KEY

export const POST = asyncWrapperApi(async (req)=>{
    if(!sendGridApi) throw new Error("can not get the send grid api key . please check your envirement variables")
    else if(!appConfig.email || !appConfig.personalEmail) throw new Error("make sure to enclude the email and the personal email in the envirement variables")
    const body = await  req.json()
    const parsedBody = contactValidator.safeParse(body)
    if(!parsedBody.success) return apiResponse(StatusCodes.BAD_REQUEST , errorMessage("invalid data has been provided to the api")  ) 
    sendGrid.setApiKey(sendGridApi)

    const message  = {
        to : appConfig.personalEmail , 
        from : appConfig?.email   ,
        subject: "Roamio Client Message" ,
        text : `email : ${parsedBody.data.email} , message: ${parsedBody.data.message}  , name : ${parsedBody.data.name} ` ,
        html : `<div><b>email :</b> <p> ${parsedBody.data.email} <p> ,<br/> <b> message:</b> <p> ${parsedBody.data.message} </p>  ,<br/> <b>name :</b> <p>${parsedBody.data.name}</p></div>` , 
    }

    const response =  await  sendGrid.send(message) ; 
return apiResponse(StatusCodes.CREATED )

})