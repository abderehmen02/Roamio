import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { mostVisited } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"

export const GET = asyncWrapperApi(async ()=>{
   let updatedCities = 0 ;
      for(let i  = 0 ; i < mostVisited.length ; i++){
      const existCity = await cityModal().findOne({name : mostVisited[i].name})
      if(existCity){ await cityModal().findOneAndUpdate({name : mostVisited[i].name} , { ...mostVisited[i] , landmarks : mostVisited[i].landmarks.map(landmark =>({name :landmark , likes: [] , dislikes: []  , reviews: [] })) , reviews: [] , likes: [] , dislikes : [] , categories:existCity.categories} ,{new: true})
      updatedCities++
console.log("updated city" , updatedCities)
      }
      // else await cityModal().create({...mostVisited[i] , categories: [Categories.MostVisited]})
      }
      const newCities = await cityModal().find({})
      return apiResponse(StatusCodes.CREATED , JSON.stringify(newCities))      
})