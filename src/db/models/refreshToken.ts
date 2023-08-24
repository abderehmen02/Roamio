import { AuthService, AuthServices } from "@/types/auth";
import mongoose , {model , mongo, Schema} from "mongoose";


interface refreshTokenType {
    authService? : AuthService
    token : string, 
    expireIn : string  ,
    userId : Schema.Types.ObjectId ,
}


const refreshTokenSchema = new mongoose.Schema<refreshTokenType>({
    token : String , 
    userId : {
        type : Schema.ObjectId ,
        ref: "user" ,
    } ,
    expireIn : String ,
    authService : { type : String , default : AuthServices.NATIVE_USER }
})

export const refreshTokenModel = ()=>{
    return mongoose.models?.refreshToken || model<refreshTokenType>("refreshToken" , refreshTokenSchema)
}