import { Category , Categories , Language, Price, Weather, YearTime } from "@/types/prefrences";
import mongoose , {model , mongo, Schema} from "mongoose";

export type landMark = {
  name: string , 
  likes : number, 
  dislikes :number ,
  reviews: string[]
}

export interface CityDb {
    name: string,
    landmarks : landMark[] ,
    reviews  : string[] ,
    likes : number, 
    dislikes: number,
  }

const CitySchema = new mongoose.Schema<CityDb>({
    name: { type: String, required: true },
    landmarks : [{ name :  {type : [String] , required : true } , likes  :{type : Number , required : true} , dislikes : {type :Number , required : true} ,reviews: {type : [String] , required: true} } ] , 
    reviews: {type : [String ] , required: true }  ,
    likes : {type : Number , required : true} ,
    dislikes : {type : Number  , required  : true}
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