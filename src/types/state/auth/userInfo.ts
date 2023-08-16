import { genderType } from "@/types/errors/auth"

export enum UserInfoActionTypes  {
    ADD_USER_INFO = 'ADD_USER_INFO' ,
    DELETE_USER_INFO = 'DELETE_USER_INFO'
}


export type UserInfo =  {
    birthDate : string ,
    email : string , 
    firstName: string ,
    lastName : string  ,
    userName : string ,
    _id : string ,
    token : string ,
    gender : genderType ,

}