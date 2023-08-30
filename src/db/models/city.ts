import { Category, Language, Price, Weather, YearTime } from "@/types/prefrences";
import { LanguageDetectorAsyncModule } from "i18next";
import mongoose , {model , mongo, Schema} from "mongoose";

export const Continents = {
  EUROPE : "Europe" ,
  AFRICA : "Africa" ,
  ASIA : "ASIA" ,
  NORTH_AMERICA : "NORTH_AMERICA" ,
  SOUTH_AMERICA : "SOURTH_AMERICA" ,
  ANTARCTICA :  "ANTARCTICA"  ,
  AUSTRALIA : "AUSTRALIA"
} as const 
export const continentsArray = Object.values(Continents)
export type Continent = typeof continentsArray[number]

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
  
export const cityModal  = ()=>{
    return mongoose.models?.city || model<CityDb>("city" , CitySchema)
}

