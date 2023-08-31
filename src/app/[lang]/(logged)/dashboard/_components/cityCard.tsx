import { CityDb } from "@/db/models/city"
import Image from "next/image"

export const CityCard : React.FC<CityDb> = (city)=>{
    console.log("city card" , city)
    return <div>
        city card
    </div>
}