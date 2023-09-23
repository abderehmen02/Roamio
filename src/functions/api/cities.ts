import { CityDb } from "@/db/models/city"
// import { generateQueryCitiesSearchParam } from "@/utils/queryCities"
import axios from "axios"


export const getCity = async (city : string) : Promise<CityDb>=>{
console.log("city" , city )
// const query = generateQueryCitiesSearchParam({name : city})
const response = await axios.get(`/api/getCities`)
return response.data[0] as CityDb
}