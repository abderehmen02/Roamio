"use client"
import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import { Title } from "@/ui/title"
import { H3, P } from "@/ui/typography"
import React, { useState } from "react"
import { generateExtractDescreptionIndex } from "./cityCard"
import { useTranslation } from "@/app/i18n/client"
import { cn } from "@/lib/tailwind"
import { landMark } from "@/db/models/city"


export const LandmarkCard : React.FC<{landMark : landMark , cityLon : number , cityLat : number }> =({landMark , cityLon , cityLat })=>{
    const {t} = useTranslation()
    const {descreption , error  ,title , image , imageAspectRacio , infoAvailble , lat , loading , lon , subtitle } = usePlaceWikipediaData(landMark.name)
    const extractedIndex =     generateExtractDescreptionIndex(descreption?.length as number , imageAspectRacio as number )
    const extractedDescreption = descreption?.slice(  0  )
    const [seeAllDescreption, setseeAllDescreption] = useState<boolean>(false)


    if(error || loading ) return 
return  <div className=" flex shadow-md  rounded-xl  w-full border-stone-600" >
    <img  src={image}  style={{width : '200px' , objectFit: 'cover' , minHeight : '60px' }} className={ cn( "rounded-l-xl border-2 " , {"h-full" : !seeAllDescreption , "h-fit " : seeAllDescreption } )} />
    
    <div className="flex px-6 py-2 justify-around flex-col gap-1" >
     <Title  title={title} titleClassName="text-xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark text-base" descreption={subtitle}  />
     { descreption &&  <P className="text-sm" >{ seeAllDescreption ? descreption  :  descreption?.slice(0 ,extractedIndex ) }{ extractedIndex < descreption.length &&  (  seeAllDescreption ?  <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setseeAllDescreption(false)} >... {t("seeLess")}</span>  :     <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setseeAllDescreption(true)} >... {t("seeMore")}</span> )}</P> }
    </div></div>
}