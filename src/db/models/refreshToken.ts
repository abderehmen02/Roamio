import mongoose , {model , mongo, Schema} from "mongoose";


interface refreshTokenType {
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
    expireIn : String 
})

export const refreshTokenModel = ()=>{
    return mongoose.models?.refreshToken || model<refreshTokenType>("refreshToken" , refreshTokenSchema)
}