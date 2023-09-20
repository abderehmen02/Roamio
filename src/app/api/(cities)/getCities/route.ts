import { CityDb, cityModal } from "@/db/models/city"
import { Categories, Category, Price } from "@/types/prefrences"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { QueryObjParams } from "@/utils/queryCities"


export const  getCities  = async ( queries : {categories: Category[] , prices:Price[] , page?: number , name?: string }  ) : Promise<CityDb[]>  =>{
const { categories , prices , page= 1 , name } = queries
  const queryArray = []
  
  if(Object.keys(queries).length === 0  ) queryArray.push({$or: [{ categories: [Categories.MostVisited] }]})
  if(categories.length) queryArray.push({$or: categories.map(category => ({ "categories.name" : category }))})
  if(prices.length) queryArray.push({$or: prices.map(price => ({ price:  price  })) })
  if(name) queryArray.push({name})
 let cities : CityDb[] = await cityModal().find( {$and: queryArray}).limit(page * 50)
 return cities
}



export const GET = asyncWrapperApi(async (req )=>{
      const {searchParams} = new URL(req.url)
      const categories  : Category[]  =   JSON.parse(searchParams.get(QueryObjParams.categories) || '[]' )
      const price : Price[]  = JSON.parse(searchParams.get(QueryObjParams.price) || '[]' )
      const page : number = Number(searchParams.get(QueryObjParams.page) || 1)
      const name : string = searchParams.get(QueryObjParams.name) || ""
      let cities : CityDb[] = await  getCities({categories , prices : price  ,page , name } )
      return  apiResponse(200 , cities)
})