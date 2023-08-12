enum SignUpFields {
    USERNAME,
    PASSWORD,
    FIRSTNAME,
    LASTNAME,
    GENDER,
    BIRTHDATE,
    EMAIL,
  }


type signUpShortMessages = | "shortUsername" | "longUsername" | "shortPassword"
  | "invalidBirthDate" | "invalidFirstName" | "shortFirstName"
  | "longFirstName" | "invalidLastName" | "shortLastName"
  | "longLastName" | "invalidEmail" | "missingProperty" | "invalidGender";


type signUpErrorsType   = {
[key in signUpShortMessages] : {
    message : string ,
    field? : SignUpFields  ,
    shortMessage : key  
} 
} 



export const signUpErrors : signUpErrorsType  =  {
    shortUsername :{message : "Username must be at least 5 characters " , field : SignUpFields.FIRSTNAME  ,  shortMessage : 'shortUsername' } ,
    longUsername : { message :  "Username must be at most 50 characters" , field : SignUpFields.LASTNAME, shortMessage : "longUsername"  } ,
    shortPassword: { message : "Password must be at least 8 charachters" , field : SignUpFields.PASSWORD, shortMessage : "shortPassword"  }    ,
    invalidBirthDate :  { message :   "Birth date is not valid" , field : SignUpFields.BIRTHDATE,  shortMessage : "invalidBirthDate"  } ,
    invalidFirstName : { message :  "Firstname is not valid" , field : SignUpFields.FIRSTNAME , shortMessage : "invalidFirstName" } ,
    missingProperty : {  message : "Some property is missing" , shortMessage : "missingProperty" }  ,
    invalidLastName : { message :  "Lastname is not valid" , field : SignUpFields.LASTNAME , shortMessage : "invalidLastName"    }  ,
    invalidEmail :  { message :  "Email is not valid" , field : SignUpFields.EMAIL , shortMessage : "invalidEmail"  },
    longFirstName : { message :  "Firstname must be less than 50 characters" , field: SignUpFields.FIRSTNAME , shortMessage : "longFirstName" }   ,
    shortFirstName : {message  :  "Firstname must be more than 2 characters"  , field : SignUpFields.FIRSTNAME  , shortMessage : "shortFirstName"} ,
    longLastName : {message   :"Lastname must be less 50 characters" ,field : SignUpFields.LASTNAME , shortMessage : "longLastName" } ,
    shortLastName: {message : "Lastname must be more than 2 characters" , field : SignUpFields.LASTNAME , shortMessage : "shortLastName"  } ,
    invalidGender : {message : "Gender is not valid" , field : SignUpFields.GENDER , shortMessage : "invalidGender" } ,
} 

export enum genderType {
    male =  "MALE" ,
    female ="FEMALE" ,
    unknown = "UNKNOWN"
 } 