export interface signUpErrorsType    {
    shortUsername : string ,  
    longUsername : string , 
    shortPassword: string ,
    invalidBirthDate : string ,
    invalidFirstName : string ,
    shortFirstName : string ,
    longFirstName : string ,
    invalidLastName : string , 
    shortLastName : string ,
    longLastName : string ,
    invalidEmail : string ,
    missingProperty : string ,

} 



export const signUpErrors : signUpErrorsType  =  {
    shortUsername : "Username must be at least 5 characters " ,
    longUsername : "Username must be at most 50 characters" ,
    shortPassword: "Password must be at least 8 charachters"  ,
    invalidBirthDate : "Birth date is not valid" ,
    invalidFirstName : "Firstname is not valid" ,
    missingProperty : "Some property is missing"  ,
    invalidLastName : "Lastname is not valid"  ,
    invalidEmail : "Email is not valid" ,
    longFirstName : "Firstname must be less than 50 characters"   ,
    shortFirstName : "Firstname must be more than 2 characters"  ,
    longLastName : "Lastname must be less 50 characters"  ,
    shortLastName: "Firstname must be more than 2 characters"    
} as const