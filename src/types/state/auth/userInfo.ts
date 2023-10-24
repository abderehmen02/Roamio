import { GoogleUserDb } from "@/db/models/googleUser"
import { genderType } from "@/types/errors/auth"

export enum UserInfoActionTypes  {
    ADD_USER_INFO  = "ADD_USER_INFO" ,
    RESET_USER_INFO = "RESET_USER_INFO" ,
    FAIL_USER_INFO  =  "FAIL_USER_INF"
}

export type UserInfoError  =  {
    error : string
}


export type UserInfo =  {
     birthDate : string ,
    email : string , 
    savedCities: string[]
    firstName: string ,
    lastName : string  ,
    image?:string ,
    verified : boolean , 
    userName : string ,
    _id : string ,
    gender : genderType 
} | GoogleUserDb
export type UserInfoState =  UserInfo | UserInfoError | null 


export type  AddUserInfoAction = {
    type : UserInfoActionTypes.ADD_USER_INFO ,
    payload: UserInfo 
}


export type ResetUserInfoAction = {
    type : UserInfoActionTypes.RESET_USER_INFO  ,
}

export type FailedUserInfo  ={
    type : UserInfoActionTypes.FAIL_USER_INFO ,
    payload : UserInfoError 
}


export function isUserInfo(user: UserInfoState): user is UserInfo {
    return (user as UserInfo)?._id !== undefined ;
  }


export function isGoogleUser(user: any ): user is GoogleUserDb {
    return user && ( user  as GoogleUserDb )?.googleUser ;
  }



export type UserInfoAction = FailedUserInfo |  ResetUserInfoAction | AddUserInfoAction