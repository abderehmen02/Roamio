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
    landmarks : landMark[] ,
    reviews  : {user: string , review : string}[] ,
    likes : string[], 
    dislikes: string[],
  }

const CitySchema = new mongoose.Schema<CityDb>({
    name: { type: String, required: true },
    landmarks : [{ name :  {type : String , required : true } , likes  :{type : [String] , required : true} , dislikes : {type :[String], required : true} ,reviews: {type : [{user: {type : String , required : true} , review : {type : String , required: true} }] , required: true} } ] , 
    reviews: {type : [{user: {type : String} , review : {type: String} }]  }  ,
    likes : [{type : String , required : true}] ,
    dislikes : [{type : String  , required  : true}]
  });
  
export const historicalModal  = ()=>{
    return mongoose.models?.[Categories.Historical] || model<CityDb>(Categories.Historical, CitySchema)
}


export const romanticModal  = ()=>{
  return mongoose.models?.[Categories.Romantic]  || model<CityDb>(Categories.Romantic , CitySchema)
}



export const modelsMap = {
  [Categories.Historical] : historicalModal() ,
  [Categories.Romantic] : romanticModal()
}