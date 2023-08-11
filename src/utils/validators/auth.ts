import { emailRegEx } from "@/config/auth"
import { signUpErrors , genderType } from "@/types/errors/auth"
import {z} from "zod"
import { validBirthDate } from "./clientValidators"




export const signUpValidator = z.object({
    userName : z.string().min(4 , {message :  signUpErrors.shortFirstName}).max(50  ,{ message :  signUpErrors.longFirstName }) ,
    firstName : z.string().min( 2, { message :  signUpErrors.shortLastName} ).max(50 ,{ message :  signUpErrors.longUsername } ) ,
    lastName : z.string().min(2, {message : signUpErrors.shortLastName}).max(50 , {message : signUpErrors.longLastName}) ,
    password : z.string().min(2 , { message :  signUpErrors.shortPassword}) ,
    birthDate : z.string().refine(validBirthDate  , {message : signUpErrors.invalidBirthDate} ) ,
     email : z.string().regex(emailRegEx , {message :  signUpErrors.invalidEmail}) ,
     gender : z.nativeEnum(genderType  ).refine(  value => Object.values(genderType).includes(value),{          message: "Invalid gender value" })
}) 