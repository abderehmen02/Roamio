import { connectDbPromise } from "@/db/connect"
import { CityDb, cityModal } from "@/db/models/city"
import { Categories, Category, Prices } from "@/types/prefrences"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"


export const  getCities : (categories: Category[]) => Promise<CityDb[]> = async (categories )  =>{
 let cities : CityDb[] = await cityModal().find({categories: { $in: [categories] }})
 return cities
}



export const GET = asyncWrapperApi(async (req )=>{
      console.log("get cities request")
      const {searchParams} = new URL(req.url)
      const categories  : Category[]  =   JSON.parse(searchParams.get("categories") || '[]' )
      console.log("caterogies" , categories)
      let cities : CityDb[] = await  getCities(categories)
      return  apiResponse(200 , cities)
})


