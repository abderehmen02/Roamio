import { CityDb } from "@/db/models/city"
import { QueryObjParams } from "@/utils/queryCities"
// import { generateQueryCitiesSearchParam } from "@/utils/queryCities"
import axios from "axios"


export const getCity = async (city : string) : Promise<CityDb>=>{
const urlSearchParams = new URLSearchParams()
urlSearchParams.set(QueryObjParams.name , city )
const response = await axios.get(`/api/getCities?${urlSearchParams.toString()}` )
return response.data[0] as CityDb
}