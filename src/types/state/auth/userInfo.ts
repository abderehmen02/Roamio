import { genderType } from "@/types/errors/auth"

export enum UserInfoActionTypes  {
    ADD_USER_INFO  ,
    RESET_USER_INFO ,
    FAIL_USER_INFO
}

export type UserInfoError  =  {
    error : string
}

export type UserInfo =  {
 data? : {    birthDate : string ,
    email : string , 
    firstName: string ,
    lastName : string  ,
    userName : string ,
    _id : string ,
    token : string ,
    gender : genderType },
} | null

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

export type UserInfoAction = FailedUserInfo |  ResetUserInfoAction | AddUserInfoAction