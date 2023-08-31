import { Continents, cityModal } from "@/db/models/city"
import { Prices } from "@/types/prefrences"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"




export const GET = asyncWrapperApi(async (req )=>{
      const {searchParams} = new URL(req.url)
      const name = searchParams.get("name") 
      const countries = searchParams.get("countries")
      const continents = searchParams.get("continents")
      const population = searchParams.get("population") 
      const categories = searchParams.get("categories")
      const prices = searchParams.get("prices")
      const weathers = searchParams.get("weathers") 
      const yearTimes = searchParams.get("yearTimes")
      const languages =    searchParams.get("languages")
   
const queryDb : any = {}  ; 
if(name ) queryDb.name = name 
if(countries) queryDb.country = {$in: JSON.parse(countries)} 
if(continents) queryDb.continent = {$in: JSON.parse(continents)} 
if(population) queryDb.population = population 
if(categories) queryDb.categories =  {$in: JSON.parse(categories)}
if(prices) queryDb.price = {$in: JSON.parse(prices)}
if(weathers) queryDb.weathers = { $in :   JSON.parse(weathers)}
if(yearTimes) queryDb.yearTimes = { $in : JSON.parse(yearTimes)}
if(languages) queryDb.languages = { $in : JSON.parse( languages)}

if(!Object.keys(queryDb).length) {
      queryDb.continent = {$in: [Continents.EUROPE  ]} 
      queryDb.price  = {$in : [Prices.costly , Prices.expensive , Prices.medium  ] } 
}
console.log("query db"   , queryDb)
       const cities = await cityModal().find(queryDb)

      return  apiResponse(200 , cities)
})