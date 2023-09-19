import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import {  religiousCities } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"





export const GET = asyncWrapperApi(async ()=>{
      let addedCities = 0 ;
         for(let i  = 0 ; i < religiousCities.length ; i++){
         const existCity = await cityModal().findOne({name : religiousCities[i].name})
         if(existCity){ await cityModal().findOneAndUpdate({name : religiousCities[i].name} , { $addToSet: { categories: Categories.Religious  }} ,{new: true})
         }
         else{ await cityModal().create({...religiousCities[i] , landmarks : religiousCities[i].landmarks.map(landmark=>({name :landmark , likes: [] , dislikes: []  , reviews: [] }) ) , categories: [Categories.Religious]  , reviews: [] , likes: [] , dislikes : []  })
         addedCities++ 

      }
         }
         const newCities = await cityModal().find({})
         return apiResponse(StatusCodes.CREATED , JSON.stringify({ data: newCities , number : addedCities } ))      
   })