"use client"

import { useTranslation } from "@/app/i18n/client"
import { CityDb } from "@/db/models/city"
import { useCityWikipediaData } from "@/hooks/cityWikipediaData"
import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { Title } from "@/ui/title"
import {  P } from "@/ui/typography"
import { useEffect, useRef, useState } from "react"

export const CityCard : React.FC<CityDb> =  (city)=>{
    const cityWikipediaData   =  useCityWikipediaData(city.name)
    const [parentHeight , setParentHeight]= useState(0)
    const parentRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        if (parentRef.current) {
        //   const rect = img.current.getBoundingClientRect();
          setParentHeight(parentRef.current.offsetHeight);
        }
      }, [ cityWikipediaData.image]);


    const {t} = useTranslation()
    if(cityWikipediaData.error || !cityWikipediaData.infoAvailble || cityWikipediaData.loading ) return null
    const {descreption , image , lat , lon , subtitle} = cityWikipediaData
    const extractedDescreption = descreption?.slice(  0  , parentHeight )
    //  console.log("data" , cityWikipediaData)
    return <div ref={parentRef} className=" flex border-2 bg-white rounded-xl border-stone-600" >
    <img  src={image}  style={{width : '200px' , maxHeight : '300px' , objectFit: 'contain' ,  }} className=" h-fit  border-2 border-red-600 " />
    <div className="flex px-6 py-2 flex-col gap-1" >
     <Title  title={city.name} titleClassName="text-2xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark" descreption={subtitle}  />
     <P className="text-sm" >{extractedDescreption }</P>
     <div className="flex justify-between" ><P className="text-center  text-xs" >{city.continent} </P><P className="text-center text-xs" >{t("languages")} :<br/>{city.languages.map((lan , index)=><span>{lan} { index !== city.languages.length && ','} </span>)}</P><P className="text-center text-xs" >{t("cityCard.latitude")} :<br/> {lat} </P> <P className="text-center text-xs" >{t("cityCard.longitude")} :<br/> {lon} </P>       <div className="flex  px-8 gap-14" ><PrimaryBtn size={ButtonsSizes.medium} >{t("City Data")}</PrimaryBtn><SecondaryBtn size={ButtonsSizes.medium} >{t("Explore City")}</SecondaryBtn></div>
 </div>
    </div>
    </div>
}