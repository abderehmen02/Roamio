import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { mostVisited } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"

export const GET = asyncWrapperApi(async ()=>{
   
      for(let i  = 0 ; i < mostVisited.length ; i++){
      const existCity = await cityModal().findOne({name : mostVisited[i].name})
      if(existCity) await cityModal().findOneAndUpdate({name : mostVisited[i].name} , {...existCity , categories: [ ...existCity.categories , Categories.MostVisited ]} ,{new: true})
      else await cityModal().create({...mostVisited[i] , categories: [Categories.MostVisited]})
      }
      const newCities = await cityModal().find({})
      return apiResponse(StatusCodes.CREATED , JSON.stringify(newCities))      
})