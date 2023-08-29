import { cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"

export const GET = asyncWrapperApi(async ()=>{

      const orléans = await cityModal().findOne({name : "Orléans"})
      console.log("new cities" , orléans )
      return  apiResponse(200 , {data : orléans})
})