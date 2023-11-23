import mongoose , {model , mongo, Schema} from "mongoose";


export interface GoogleUserDb { 
    email : string , 
    googleUser : true , 
    given_name? : string ,
    lastName?  : string ,
    name:  string ,
    picture : string , 
    profilePic? : string ,
    savedCities: string[]  ,
    _id: string , 
}


const googleUserSchema = new mongoose.Schema<GoogleUserDb>({
    email: { type: String, required: true },
    given_name: { type: String, required: false },
    googleUser : {type : Boolean , default : true } ,
    lastName: { type: String, required: false },
    savedCities : {type: [String ] , default : [] } ,
    name : {type : String , required : true} ,
    profilePic : {type : String , required : false}  ,
    picture  : {type : String , required : true} // the google profile pic
  });
  
export const googleUserModel = ()=>{
    return mongoose.models?.googleUser || model<GoogleUserDb>("googleUser" , googleUserSchema)
}