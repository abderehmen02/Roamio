export const authConfig ={
    jwtRefreshDays :       30, //30 days 
    tokenExpiresIn : '20m' , 
    minimumBirthDate : "01-01-1920" 
}
export const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/