import { authServises } from "@/types/auth";
import mongoose , {model , mongo, Schema} from "mongoose";


interface refreshTokenType {
    authServise? : authServises.GOOGLE
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
    authServise : { type : String , default : authServises.NATIVE_USER }
})

export const refreshTokenModel = ()=>{
    return mongoose.models?.refreshToken || model<refreshTokenType>("refreshToken" , refreshTokenSchema)
}