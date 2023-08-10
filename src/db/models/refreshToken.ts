import mongoose , {model , mongo, Schema} from "mongoose";


interface refreshTokenType {
    token : string, 
    expireIn : number  ,
    user : Schema.Types.ObjectId ,
}


const refreshTokenSchema = new mongoose.Schema<refreshTokenType>({
    token : String , 
    user : {
        type : Schema.ObjectId ,
        ref: "user" ,
    } ,
    expireIn : Number 
})

export const refreshTokenModel = ()=>{
    return mongoose.models?.refreshToken || model<refreshTokenType>("refreshToken" , refreshTokenSchema)
}