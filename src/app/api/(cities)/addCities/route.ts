import { historicalModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { historicalArray } from "./static"

export const GET = asyncWrapperApi(async ()=>{
      const newCities = await historicalModal().create(historicalArray)

      console.log("new cities" , newCities )
      return  apiResponse(200 , {data : newCities})
})