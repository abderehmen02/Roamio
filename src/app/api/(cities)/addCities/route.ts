import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { historicalCities } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"

export const GET = asyncWrapperApi(async ()=>{
   
      for(let i  = 0 ; i < historicalCities.length ; i++){
      const existCity = await cityModal().findOne({name : historicalCities[i].name})
      if(existCity) await cityModal().findOneAndUpdate({name : historicalCities[i].name} , {...existCity , categories: [ ...existCity.categories , Categories.Historical ]} ,{new: true})
      else await cityModal().create({...historicalCities[i] , categories: [Categories.Historical]})
      console.log("added one city")
      }

      const newCities = await cityModal().find({})
      return apiResponse(StatusCodes.CREATED , JSON.stringify(newCities))      
})