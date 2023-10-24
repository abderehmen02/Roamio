import { AuthServices } from "@/types/auth";
import mongoose , {model , mongo, Schema} from "mongoose";
import { googleUserModel } from "./googleUser";


export interface UserDb { 
    userName : string ,
    email : string , 
    password : string ,
    firstName : string ,
    verified : boolean ,
    image? : string ,
    lastName  : string ,
    _id: string , 
    savedCities: string[]  ,
    birthDate : Date ,
    gender : "MALE" | "FEMALE"
}


const userSchema = new mongoose.Schema<UserDb>({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    savedCities: {type : [String] , default: [] } ,
    image : {type : String , required : false} ,
     verified : {type : Boolean , required : true} ,
    lastName: { type: String, required: true },
    birthDate: { type: Date , required: true },
    gender: { type: String, enum: ['MALE', 'FEMALE' , 'UNKNOWN' ], required: true }
  });
  
export const userModel = ()=>{
    return mongoose.models?.user || model<UserDb>("user" , userSchema)
}


export const userModelsMap = {
    [AuthServices.NATIVE_USER] : userModel() ,
    [AuthServices.GOOGLE] : googleUserModel()
}