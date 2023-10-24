import { AuthService } from "."

export type UserStoredWithToken = {
userId: string  , 
authService? : AuthService
}

export enum TokenTypes {
    RESET_PASSWORD = "reset-password" 
}


export interface ResetPasswordTokenInfo {
    type : TokenTypes.RESET_PASSWORD , 
    userId : string ,
}