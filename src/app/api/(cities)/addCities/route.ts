import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import {  ModernCities } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"





export const GET = asyncWrapperApi(async ()=>{
      let addedCities = 0 ;
         for(let i  = 0 ; i < ModernCities.length ; i++){
         const existCity = await cityModal().findOne({name : ModernCities[i].name})
         if(existCity){ await cityModal().findOneAndUpdate({name : ModernCities[i].name} , { $addToSet: { categories: Categories.Modern  }} ,{new: true})
         }
         else{ await cityModal().create({...ModernCities[i] , landmarks : ModernCities[i].landMarks.map(landmark=>({name :landmark , likes: [] , dislikes: []  , reviews: [] }) ) , categories: [Categories.Modern]  , reviews: [] , likes: [] , dislikes : []  })
         addedCities++ 

      }
         }
         const newCities = await cityModal().find({})
         return apiResponse(StatusCodes.CREATED , JSON.stringify({ data: newCities , number : addedCities } ))      
   })