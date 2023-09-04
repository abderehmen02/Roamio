import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export type PlaceWikipediaData = {
    subtitle : string | undefined, 
    image : string | undefined, 
    imageAspectRacio : number | undefined , 
    descreption : string  | undefined,
    lat : number | undefined, 
    lon : number  | undefined,
    infoAvailble : boolean | undefined, 
    loading : boolean , 
    error :  any 
}

export const usePlaceWikipediaData =(cityName : string ) : PlaceWikipediaData =>{
const {data  , isLoading , error } = useQuery({
    queryKey : ["cityData" , cityName ] , 
    queryFn: async ()=>{
        const wikipediaUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${cityName}` ; 
        const response  = await axios.get(wikipediaUrl)
        return response.data
}})

return {
    subtitle : data?.description ,
    image: data?.thumbnail?.source || data?.originalimage?.source ,
    descreption : data?.extract  ,
    imageAspectRacio : data?.thumbnail?.height / data?.thumbnail?.width  || data?.originalimage?.height / data?.originalimage?.width ,
    infoAvailble : Boolean(data?.description && (data?.thumbnail?.source || data?.originalimage?.source) && data?.extract ) , 
    lat : data?.coordinates?.lat ,
    lon : data?.coordinates?.lon , 
    loading : isLoading , 
    error : error
}
}