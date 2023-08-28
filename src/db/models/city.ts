import { Category, Language, Price, Weather, YearTime } from "@/types/prefrences";
import { LanguageDetectorAsyncModule } from "i18next";
import mongoose , {model , mongo, Schema} from "mongoose";


export type Continent = "Europe" | "Africa"

export interface CityDb {
    name: string,
    country: string,
    continent: Continent ,
    population: number ,
    categories: Category[],
    price: Price[],
    weathers: Weather[],
    yearTimes: YearTime[],
    languages: Language[] ,
    _id: string
  }


const CitySchema = new mongoose.Schema<CityDb>({
    name: { type: String, required: true },
    country: { type: String, required: false },
    continent : {type : String , required : true } ,
    population: { type: Number, required: true },
    categories : {type : [String] , required : true} ,
    price  : {type : [String] , required : true} ,
    weathers : {type : [String] , required : true} ,
    yearTimes : {type : [String] , required  : true}  ,
    languages : {type : [String] , required : true}
  });
  
export const cityModal = ()=>{
    return mongoose.models?.user || model<CityDb>("city" , CitySchema)
}
