import { appConfig } from "@/config";
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
    error :  any ,
    title : string 
}

export const usePlaceWikipediaData =(cityName : string ) : PlaceWikipediaData =>{
const {data  , isLoading , error } = useQuery({
    queryKey : ["cityData" , cityName] , 
    staleTime: appConfig.cityCashingTime,
    queryFn: async ()=>{
         await new Promise((res , rej )=> setTimeout(()=>{res("continue")} , 3000 ) )
        const wikipediaUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${cityName}` ; 
        const response  = await axios.get(wikipediaUrl)
        return response.data
}})
return {
    subtitle : data?.description ,
    image: data?.thumbnail?.source || data?.originalimage?.source || "/no-image.png",
    descreption : data?.extract  ,
    imageAspectRacio : data?.thumbnail?.height / data?.thumbnail?.width  || data?.originalimage?.height / data?.originalimage?.width ,
    infoAvailble : Boolean( data?.description !== "Topics referred to by the same term"  && data?.description && (data?.thumbnail?.source || data?.originalimage?.source) && data?.extract ) , 
    lat : data?.coordinates?.lat ,
    lon : data?.coordinates?.lon , 
    title : data?.title ,
    loading : isLoading , 
    error : error
}
}