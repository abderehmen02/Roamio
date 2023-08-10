import mongoose , {model , mongo, Schema} from "mongoose";


interface userType { 
    userName : string ,
    email : string , 
    password : string ,
    firstName : string ,
    lastName  : string ,
    birthDate : number
    gender : "MALE" | "FEMALE"
}


const userSchema = new mongoose.Schema<userType>({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Number, required: true },
    gender: { type: String, enum: ['MALE', 'FEMALE'], required: true }
  });
  
export const refreshTokenModel = ()=>{
    return mongoose.models?.refreshToken || model<userType>("user" , userSchema)
}