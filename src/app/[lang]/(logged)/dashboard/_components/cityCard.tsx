"use client"

import { useTranslation } from "@/app/i18n/client"
import { CityDb } from "@/db/models/city"
import { useCityWikipediaData } from "@/hooks/cityWikipediaData"
import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { Title } from "@/ui/title"
import {  P } from "@/ui/typography"
import { useEffect, useRef, useState } from "react"

const generateExtractDescreptionIndex : (length : number  , aspectRacio : number | undefined )=>number = (length , aspectRacio )  =>{
  if(aspectRacio){
  if(aspectRacio < 0.6) return 90
  if(aspectRacio < 0.7) return 200
  if(aspectRacio < 0.9) return 300
  if(aspectRacio < 1.1 ) return 400
  if(aspectRacio < 1.2) return 500
  }
  return length
}

export const CityCard : React.FC<CityDb> =  (city)=>{
    const cityWikipediaData   =  useCityWikipediaData(city.name)
   
    



    const {t} = useTranslation()
    if(cityWikipediaData.error || !cityWikipediaData.infoAvailble || cityWikipediaData.loading ) return null
    const {descreption , image , lat , lon , subtitle , imageAspectRacio } = cityWikipediaData
      const extractedIndex =     generateExtractDescreptionIndex(descreption?.length as number , imageAspectRacio as number )
     const extractedDescreption = descreption?.slice(  0  )
    return <div  className=" flex border-2 bg-white rounded-xl w-full border-stone-600" >
    <img  src={image}  style={{width : '200px' , height: '100%' , objectFit: 'cover' ,  }} className=" h-fit rounded-l-xl border-2  " />
    <div className="flex px-6 py-2 justify-around flex-col gap-1" >
     <Title  title={city.name} titleClassName="text-2xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark" descreption={subtitle}  />
     <P className="text-sm" >{extractedDescreption?.slice(0 ,extractedIndex ) }{ extractedIndex < Number(descreption?.length) && <span className="capitalize" >... {t("seeMore")}</span>}</P>
     <div className="flex justify-between" ><P className="text-start  text-xs" >{city.continent} </P><P className="text-start text-xs" >{t("languages")} :<br/>{city.languages.map((lan , index)=><span>{lan} { index !== city.languages.length && ','} </span>)}</P><P className="text-start text-xs" >{t("cityCard.latitude")} :<br/> {lat} </P> <P className="text-start text-xs" >{t("cityCard.longitude")} :<br/> {lon} </P>       <div className="flex  px-8 gap-14" ><PrimaryBtn size={ButtonsSizes.medium} >{t("City Data")}</PrimaryBtn><SecondaryBtn size={ButtonsSizes.medium} >{t("Explore City")}</SecondaryBtn></div>
 </div>
    </div>
    </div>
}