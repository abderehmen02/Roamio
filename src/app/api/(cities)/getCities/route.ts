import { CityDb, cityModal } from "@/db/models/city"
import { Categories, Category, Price } from "@/types/prefrences"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { QueryObjParams } from "@/utils/queryCities"


export const  getCities : ( categories: Category[] , prices:Price[] , page?: number ) => Promise<CityDb[]> = async (categories , prices , page= 1 )  =>{
  const queryArray = []
  if(!categories.length  ) queryArray.push({$or: [{ categories: [Categories.MostVisited] }]})
  if(categories.length) queryArray.push({$or: categories.map(category => ({ categories: category }))})
  if(prices.length) queryArray.push({$or: prices.map(price => ({ price:  price  })) })

 let cities : CityDb[] = await cityModal().find( {$and: queryArray}).limit(page * 50)
 console.log("cities length" , cities.length)
 return cities
}



export const GET = asyncWrapperApi(async (req )=>{
      const {searchParams} = new URL(req.url)
      const categories  : Category[]  =   JSON.parse(searchParams.get(QueryObjParams.categories) || '[]' )
      const price : Price[]  = JSON.parse(searchParams.get(QueryObjParams.price) || '[]' )
      const page : number = Number(searchParams.get(QueryObjParams.page) || 1)
      let cities : CityDb[] = await  getCities(categories , price  ,page )
      return  apiResponse(200 , cities)
})


