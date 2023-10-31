import { appConfig } from "."

export const authConfig ={
    jwtRefreshDays :       30, //30 days 
    tokenExpiresIn : '30h' , 
    minimumBirthDate : "01-01-1920"  ,
    bycryptSaltRounds : 10 ,
    refreshTokenCookieName : "refreshToken" ,
    tokenCookieName : "tokenCookieName" ,
    userInfoLocalStorageName : "user-info" ,
    emailVerificationMessageSubject : `${appConfig.name} - Verify Email` ,
    unauthRoutes : ['/' , '/login' , '/signUp' ] ,
    authRoutes : ['/dashboard' ]  ,
    resetPasswordTokenExpire : '5m' ,
    googleRedirectUrl : 'http://localhost:3000/api/googleAuth' ,
    guestUsername : "guestMember" ,
    guestPassword: "gjuest123" ,
}
export const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/