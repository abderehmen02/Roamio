import mongoose , {model , mongo, Schema} from "mongoose";


export interface UserDb { 
    userName : string ,
    email : string , 
    password : string ,
    firstName : string ,
    verified : boolean ,
    lastName  : string ,
    birthDate : Date ,
    gender : "MALE" | "FEMALE"
}


const userSchema = new mongoose.Schema<UserDb>({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    verified : {type : Boolean , required : true} ,
    lastName: { type: String, required: true },
    birthDate: { type: Date , required: true },
    gender: { type: String, enum: ['MALE', 'FEMALE' , 'UNKNOWN' ], required: true }
  });
  
export const userModel = ()=>{
    return mongoose.models?.user || model<UserDb>("user" , userSchema)
}