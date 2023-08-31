"use client"

import { useTranslation } from "@/app/i18n/client"
import { CityDb } from "@/db/models/city"
import { useCityWikipediaData } from "@/hooks/cityWikipediaData"
import { Title } from "@/ui/title"
import {  P } from "@/ui/typography"

export const CityCard : React.FC<CityDb> =  (city)=>{
    const cityWikipediaData   =  useCityWikipediaData(city.name)
    const {t} = useTranslation()
    if(cityWikipediaData.error || !cityWikipediaData.infoAvailble || cityWikipediaData.loading ) return null
     const {descreption , image , lat , lon , subtitle} = cityWikipediaData
    return <div className="flex items-center " >
    <img src={image}  />
    <div className="flex flex-col" >
     <Title title={city.name}  descreption={subtitle}  />
     <P>{descreption}</P>
     <div className="flex" ><P>{city.continent} </P><P>{t("languages")} : {city.languages.map(lan=><span>{lan}, </span>)}</P><P>{t("cityCard.latitude")} : {lat} </P> <P>{t("cityCard.longitude")} : {lon} </P> </div>
    </div>
    </div>
}