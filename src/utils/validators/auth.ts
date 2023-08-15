import { emailRegEx } from "@/config/auth"
import { signUpZodErrors , genderType } from "@/types/errors/auth"
import {z} from "zod"
import { validBirthDate } from "./clientValidators"




export const signUpValidator = z.object({
    userName : z.string().min(4 , signUpZodErrors.shortUsername.shortMessage ).max(50    ,  signUpZodErrors.longUsername.shortMessage) ,
    firstName : z.string().nonempty(signUpZodErrors.requiredFirstname).min( 3,       signUpZodErrors.shortFirstName.shortMessage ).max(50  , signUpZodErrors.longFirstName.shortMessage  ) ,
    lastName : z.string().min(3,      signUpZodErrors.shortLastName.shortMessage).max(50 ,  signUpZodErrors.longLastName.shortMessage) ,
    password : z.string().min(8,     signUpZodErrors.shortPassword.shortMessage ) ,
    birthDate : z.string().refine(validBirthDate  ,     signUpZodErrors.invalidBirthDate.shortMessage ) ,
     email : z.string().regex(emailRegEx ,      signUpZodErrors.invalidEmail.shortMessage) ,
     gender : z.nativeEnum(genderType  ).refine(  value => Object.values(genderType).includes(value) ,     signUpZodErrors.invalidGender.shortMessage )
}) 

export type signUpDataType = typeof signUpValidator._type