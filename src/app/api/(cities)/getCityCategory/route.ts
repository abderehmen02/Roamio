import { CityDb, cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"





export const GET = asyncWrapperApi(async ()=>{
    const cities = await cityModal().find({categories:{$in : [ Categories.MostVisited]}})
    const mapedCities = cities.map((city : CityDb )=>city.name)
    console.log(mapedCities)
         return apiResponse(StatusCodes.CREATED , JSON.stringify({ mapedCities } ))      
   })