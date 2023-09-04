import { Category , Categories , Language, Price, Weather, YearTime } from "@/types/prefrences";
import mongoose , {model , mongo, Schema} from "mongoose";




export interface CityDb {
    name: string,
    landmarks : string[]
  }




const CitySchema = new mongoose.Schema<CityDb>({
    name: { type: String, required: true },
    landmarks : {type : [String] , required : false }
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