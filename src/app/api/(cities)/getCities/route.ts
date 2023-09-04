import { connectDbPromise } from "@/db/connect"
import { CityDb, historicalModal, modelsMap } from "@/db/models/city"
import { Categories, Category, Prices } from "@/types/prefrences"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"


export const  getCities : (categories: Category[]) => Promise<CityDb[]> = async (categories )  =>{
let cities : CityDb[] = []


for(let category of categories){
      if(category === Categories.Historical || category === Categories.Romantic ){
      let modelCities : CityDb[] =  await      modelsMap[category].find({}) 
      modelCities.forEach(city=>cities.push(city)  )      
      }
}
return cities
}
export const GET = asyncWrapperApi(async (req )=>{
      const {searchParams} = new URL(req.url)
      const categories  : Category[]  =   JSON.parse(searchParams.get("categories") || '[]' )
      let cities : CityDb[] = await  getCities(categories)
      return  apiResponse(200 , cities)
})


