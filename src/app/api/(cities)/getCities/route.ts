import { connectDbPromise } from "@/db/connect"
import { CityDb, cityModal } from "@/db/models/city"
import { Categories, Category, Price, Prices } from "@/types/prefrences"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { QueryObjParams } from "@/utils/queryCities"


export const  getCities : (categories: Category[] , prices:Price[] ) => Promise<CityDb[]> = async (categories , prices )  =>{
      console.log("categories" , categories)
      console.log("prices" , prices )
 let cities : CityDb[] = await cityModal().find( {$and: [
      {
        $or: categories.map(category => ({ categories: category }))
      },
      {
        $or: prices.map(price => ({ price:  price  }))
      }
    ]})
 return cities
}



export const GET = asyncWrapperApi(async (req )=>{
      console.log("get cities request")
      const {searchParams} = new URL(req.url)
      const categories  : Category[]  =   JSON.parse(searchParams.get(QueryObjParams.categories) || '[]' )
      const price : Price[]  = JSON.parse(searchParams.get(QueryObjParams.price) || '[]' )
      let cities : CityDb[] = await  getCities(categories , price  )
      return  apiResponse(200 , cities)
})


