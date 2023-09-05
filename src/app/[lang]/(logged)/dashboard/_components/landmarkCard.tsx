"use client"
import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import { Title } from "@/ui/title"
import { H3, P } from "@/ui/typography"
import React from "react"
import { generateExtractDescreptionIndex } from "./cityCard"
import { useTranslation } from "@/app/i18n/client"


export const LandmarkCard : React.FC<{landMark : string , cityLon : number , cityLat : number }> =({landMark , cityLon , cityLat })=>{
    const {t} = useTranslation()
    const {descreption , error , image , imageAspectRacio , infoAvailble , lat , loading , lon , subtitle } = usePlaceWikipediaData(landMark)
    const extractedIndex =     generateExtractDescreptionIndex(descreption?.length as number , imageAspectRacio as number )
    const extractedDescreption = descreption?.slice(  0  )

    if(error || loading ) return 
return  <div className=" flex border-2 bg-white rounded-xl  w-full border-stone-600" >
    <img src={image} width="100px" height="100px"    style={{width : '200px' , height: '100%' , objectFit: 'cover' ,  }} className=" h-fit rounded-l-xl border-2  "  />
    
    <div className="flex px-6 py-2 justify-around flex-col gap-1" >
     <Title  title={landMark} titleClassName="text-xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark text-base" descreption={subtitle}  />
     <P className="text-sm" >{extractedDescreption?.slice(0 ,extractedIndex ) }{ extractedIndex < Number(descreption?.length) && <span className="capitalize" >... {t("seeMore")}</span>}</P>
    </div></div>
}