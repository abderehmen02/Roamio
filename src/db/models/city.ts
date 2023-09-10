import { Category , Categories , Language, Price, Weather, YearTime } from "@/types/prefrences";
import mongoose , {model , mongo, Schema} from "mongoose";

export type landMark = {
  name: string , 
  reviews  : {user: string , review : string}[] ,
  likes : string[], 
  dislikes: string[],
}

export interface CityDb {
    name: string,
    price : Price ,
    country: string,
    weathers : Weather[] , 
    continent: string,
    languages : Language[] ,
    landmarks : landMark[] ,
    categories : Category[] ,
    reviews  : {userId: string  , review : string}[] ,
    yearTimes : YearTime[] ,
    likes : string[], 
    dislikes: string[],
  }








const CitySchema = new mongoose.Schema<CityDb>({
    name: { type: String, required: true , unique : true },
    price: {type : String  }  ,
     country : {type : String}  ,
     weathers : {type : [String] } ,
     categories : {type : [String]},
     continent : {type : String} ,
     languages : {type : [String]}  ,
    landmarks : [{ name :  {type : String  } , likes  :{type : [String] } , dislikes : {type :[String]} ,reviews: {type : [{user: {type : String } , review : {type : String } }] } } ] , 
    reviews: {type : [{userId: {type : String} , review : {type: String} }]  }  ,
    yearTimes : {type: [String]} ,
    likes : [{type : String , required : true}] ,
    dislikes : [{type : String  , required  : true}]
  });
  
export const cityModal  = ()=>{
    return mongoose.models?.cities || model<CityDb>("cities", CitySchema)
}




