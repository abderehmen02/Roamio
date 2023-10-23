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
  | "longLastName" | "invalidEmail" | "missingProperty" | "invalidGender" | "requiredUsername" | "requiredPassword" | "requiredEmail" | "requiredFirstname" | "requiredLastname" | "requiredGender" |"requiredBirthDate" | "UsernameExists" | "EmailExists" | "EmailSignedInWithGoogle" ;


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
    requiredUsername : {message  : "Username is required" , field : SignUpFields.USERNAME , shortMessage : "requiredUsername"} ,
    EmailExists : {message : "Email already used! try another one" , field : SignUpFields.EMAIL , shortMessage  : "EmailExists" } ,
    EmailSignedInWithGoogle : {message : "Email already signed in with google! please try to sign in with google ussing this email!." , field : SignUpFields.EMAIL , shortMessage : "EmailSignedInWithGoogle" } ,
    UsernameExists : { message : "Username already exists! try to use another username." ,field : SignUpFields.USERNAME , shortMessage : "UsernameExists" }
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




export enum SignInFields {
  USERNAME,
  PASSWORD,
}


export type signInErrorShortMessages = "invalidUsername" | "invalidPassword" | "noUserFound" | "incorrectPassword" 

type signInFieldErrorsType   = {
[key in signInErrorShortMessages] : {
    message : string ,
    field? : SignInFields  ,
    shortMessage : key  
} 
} 



export const signInFieldErrors : signInFieldErrorsType  =  {
  invalidPassword  :{shortMessage : 'invalidPassword' , field  : SignInFields.PASSWORD , message : 'Password is not valid' } ,
  invalidUsername : {shortMessage  : 'invalidUsername' , field : SignInFields.USERNAME , message : 'Username is not valid'} ,
  noUserFound :  { shortMessage : 'noUserFound' , field : SignInFields.USERNAME , message : 'No user found with this username' } ,
  incorrectPassword : {shortMessage : 'incorrectPassword' , field : SignInFields.PASSWORD , message: 'Incorrect password. please try again'}
} 

export type  signInFieldError  =  {
  message : string ,
  field? : SignInFields ,
  shortMessage : signInErrorShortMessages
}



export const AuthApiErrors = {
  expiredJWT : "your session has been expired. please Sign In to continue " , 
}
