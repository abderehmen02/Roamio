import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import {  beachCities } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"





export const GET = asyncWrapperApi(async ()=>{
      let addedCities = 0 ;
         for(let i  = 0 ; i < beachCities.length ; i++){
         const existCity = await cityModal().findOne({name : beachCities[i].name})
         if(existCity){ await cityModal().findOneAndUpdate({name : beachCities[i].name} , { $addToSet: { categories: Categories.Beach  }} ,{new: true})
         }
         else{ await cityModal().create({...beachCities[i] , landmarks : beachCities[i].landmarks.map(landmark=>({name :landmark , likes: [] , dislikes: []  , reviews: [] }) ) , categories: [Categories.Beach]  , reviews: [] , likes: [] , dislikes : []  })
         addedCities++ 

      }
         }
         const newCities = await cityModal().find({})
         return apiResponse(StatusCodes.CREATED , JSON.stringify({ data: newCities , number : addedCities } ))      
   })