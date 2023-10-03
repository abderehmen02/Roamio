"use client"

import { useTranslation } from "@/app/i18n/client"
import { Title } from "@/ui/title"
import { LandmarkCard } from "./landmarkCard"
import { CityDb } from "@/db/models/city"
import { PlaceWikipediaData } from "@/hooks/cityWikipediaData"

export const Landmarks : React.FC<{city : CityDb, cityLat : number , cityLon : number}> = ({city  , cityLat , cityLon })=>{
    const {t} = useTranslation()
    return <div  className="flex   flex-col my-10 mx-5 gap-3  pb-3"  >
        <Title titleClassName="text-xl" title={city.name + "'s " + t("Landmarks")  +':'} />
        {city.landmarks.map(landmark=>{ 
            return  <LandmarkCard key={landmark.name} cityLat={cityLat} cityLon={cityLon} landMark={landmark} />})}
    </div>
}