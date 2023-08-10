import { emailRegEx } from "@/config/auth"
import { signUpErrors } from "@/types/errors/auth"
import {z} from "zod"

export const signUpValidator = z.object({
    userName : z.string().min(4 , {message :  signUpErrors.shortFirstName}).max(50  ,{ message :  signUpErrors.longFirstName }) ,
    firstName : z.string().min( 2, { message :  signUpErrors.shortLastName} ).max(50 ,{ message :  signUpErrors.longUsername } ) ,
    lastName : z.string().min(2, {message : signUpErrors.shortLastName}).max(50 , {message : signUpErrors.longLastName}) ,
    password : z.string().min(2 , { message :  signUpErrors.shortPassword}) ,
    birthDate : z.date().min(new Date("1920-01-01")  , {message : signUpErrors.invalidBirthDate} ) ,
    email : z.string().regex(emailRegEx , {message :  signUpErrors.invalidEmail})
})