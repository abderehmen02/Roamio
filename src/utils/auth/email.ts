import { authConfig } from "@/config/auth";
import { UserDb } from "@/db/models/user";
import { generateLoginToken } from "./tokens";
import { appConfig } from "@/config";
import sendGrid from '@sendgrid/mail'
import { errorMessage } from "../api/error";
const { StatusCodes } = require("http-status-codes");


export const sendVerifyEmail = async  ( userDb  : UserDb ) : Promise<true | Object >=>{
const sendGridApi = process.env.SEND_GRID_API_KEY
if(!sendGridApi) throw new Error("can not get the send grid api key . please check your envirement variables")
const token = generateLoginToken({userId : userDb._id})
if(!token) return errorMessage("can not get the token")
sendGrid.setApiKey(sendGridApi)
const link  = `${appConfig.url}/api/verifyEmail/${token}`  
const text  = `Welcome to romio! please click the following link to verify your email ${link} `
let sent = false 
 
const message  = {
    to : userDb.email , 
    from : appConfig?.email as string ,
    subject: "Roamio Email Verification" ,
    text ,
    html : `<p>${text}</p>` , 
}
const response =  await  sendGrid.send(message) ; 
console.log("response" , response)
return true

}









const PORT = process.env.PORT || 2000



