import { CityDb } from "@/db/models/city"
import { useCityWikipediaData } from "@/hooks/cityWikipediaData"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

export const CityCard : React.FC<CityDb> = (city)=>{
    const data  = useCityWikipediaData(city.name)
    console.log("data"  , data)
    return <div>
        city card
    </div>
}