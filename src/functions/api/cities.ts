import { generateQueryCitiesSearchParam } from "@/utils/queryCities"
import axios from "axios"


export const getCity = async (city : string)=>{
console.log("city" , city )
const query = generateQueryCitiesSearchParam({name : city})
const response = await axios.get(`/api/getCities?${query}`)
console.log("data"  , response.data)
return response.data 
}