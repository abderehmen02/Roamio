import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import {  NaturalCitiesData } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"





export const GET = asyncWrapperApi(async ()=>{
      let addedCities = 0 ;
         for(let i  = 0 ; i < NaturalCitiesData.length ; i++){
         const existCity = await cityModal().findOne({name : NaturalCitiesData[i].name})
         if(existCity){ await cityModal().findOneAndUpdate({name : NaturalCitiesData[i].name} , { $addToSet: { categories: Categories.Beach  }} ,{new: true})
         }
         else{ await cityModal().create({...NaturalCitiesData[i] , landmarks : NaturalCitiesData[i].landmarks.map(landmark=>({name :landmark , likes: [] , dislikes: []  , reviews: [] }) ) , categories: [Categories.Beach]  , reviews: [] , likes: [] , dislikes : []  })
         addedCities++ 

      }
         }
         const newCities = await cityModal().find({})
         return apiResponse(StatusCodes.CREATED , JSON.stringify({ data: newCities , number : addedCities } ))      
   })