export const authConfig ={
    jwtRefreshDays :       30, //30 days 
    tokenExpiresIn : '20h' , 
    minimumBirthDate : "01-01-1920"  ,
    bycryptSaltRounds : 10 ,
    refreshTokenCookieName : "refreshToken"
}
export const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/