export const  AuthServices =  {
    GOOGLE :  "GOOGLE" ,   
    NATIVE_USER : "NATIVE_USER"
} as const



const AuthServisesArray = Object.values(AuthServices)

export type AuthService  = typeof AuthServisesArray[number]


