export enum SignUpFields {
    USERNAME,
    PASSWORD,
    FIRSTNAME,
    LASTNAME,
    GENDER,
    BIRTHDATE,
    EMAIL,
  }


export type signUpZodErrorShortMessages = | "shortUsername" | "longUsername" | "shortPassword"
  | "invalidBirthDate" | "invalidFirstName" | "shortFirstName"
  | "longFirstName" | "invalidLastName" | "shortLastName"
  | "longLastName" | "invalidEmail" | "missingProperty" | "invalidGender" | "requiredUsername" | "requiredPassword" | "requiredEmail" | "requiredFirstname" | "requiredLastname" | "requiredGender" |"requiredBirthDate" ;


type signUpFieldErrorsType   = {
[key in signUpZodErrorShortMessages] : {
    message : string ,
    field? : SignUpFields  ,
    shortMessage : key  
} 
} 



export const signUpZodErrors : signUpFieldErrorsType  =  {
    shortUsername :{message : "Username must be at least 5 characters " , field : SignUpFields.USERNAME  ,  shortMessage : 'shortUsername' } ,
    longUsername : { message :  "Username must be at most 50 characters" , field : SignUpFields.USERNAME, shortMessage : "longUsername"  } ,
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
    requiredBirthDate : {message : "Birthdate is required" , field: SignUpFields.BIRTHDATE , shortMessage : "requiredBirthDate"} ,
    requiredEmail : {message : "Email is required" , field : SignUpFields.EMAIL  , shortMessage : 'requiredEmail' } ,
    requiredFirstname : {message : "Firstname is required" , field : SignUpFields.FIRSTNAME , shortMessage : "requiredFirstname" }  ,
    requiredGender : {message : "Gender is required" , field : SignUpFields.GENDER , shortMessage :"requiredGender"} , 
    requiredLastname : {message : "Lastname is required" , field : SignUpFields.LASTNAME , shortMessage : "requiredLastname"} ,
    requiredPassword : {message : "Password is required"   , field : SignUpFields.PASSWORD , shortMessage  :"requiredPassword"}  ,
    requiredUsername : {message  : "Username is required" , field : SignUpFields.USERNAME , shortMessage : "requiredUsername"}
} 

export type  signUpFieldError  =  {
  message : string ,
  field? : SignUpFields ,
  shortMessage : signUpZodErrorShortMessages
}


export enum genderType {
    male =  "MALE" ,
    female ="FEMALE" ,
    unknown = "UNKNOWN"
 } 


export enum signUpErrorTypes {
  API_ERROR  = "API_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR"
} 