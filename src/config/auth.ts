import { appConfig } from "."

export const authConfig ={
    jwtRefreshDays :       30, //30 days 
    tokenExpiresIn : '20h' , 
    minimumBirthDate : "01-01-1920"  ,
    bycryptSaltRounds : 10 ,
    refreshTokenCookieName : "refreshToken" ,
    tokenCookieName : "tokenCookieName" ,
    userInfoLocalStorageName : "user-login" ,
    emailVerificationMessageSubject : `${appConfig.name} - Verify Email` ,
    unauthRoutes : ['/' , '/login' , '/signUp' ] ,
    authRoutes : ['/dashboard' ]  ,
    googleRedirectUrl : 'http://localhost:3000/api/googleAuth'
}
export const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/