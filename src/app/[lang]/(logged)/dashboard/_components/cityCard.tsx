"use client"

import { useTranslation } from "@/app/i18n/client"
import { CityDb } from "@/db/models/city"
import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import { cn } from "@/lib/tailwind"
import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { Title } from "@/ui/title"
import {  P } from "@/ui/typography"
import { useEffect, useRef, useState } from "react"
import { Landmarks } from "./landmarks"
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import axios from "axios"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"



export const generateExtractDescreptionIndex : (length : number  , aspectRacio : number | undefined )=>number = (length , aspectRacio )  =>{
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
  const [viewLandMarks, setViewLandMarks] = useState<boolean>(city.name == "Cairo")
   const [seeAllDescreption, setSeeAllDescreption] = useState(false)
  const cityWikipediaData   =  usePlaceWikipediaData(city.name)
  const userLogin = useSelector((state : stateType)=>state.login)
    


    const {t} = useTranslation()
    if(cityWikipediaData.error || !cityWikipediaData.infoAvailble || cityWikipediaData.loading ) return null
    const {descreption , image , lat , lon , subtitle , imageAspectRacio } = cityWikipediaData
  
     const extractedIndex = generateExtractDescreptionIndex(descreption?.length as number , imageAspectRacio as number )


    return <div className="flex flex-col shadow-md  bg-white rounded-xl  w-full border-stone-600" >
    <div  className=" flex" >
    <img  src={image}  style={{width : '300px' , objectFit: 'cover' ,  }} className={ cn( "rounded-l-xl border-2 " , {"h-full" : !seeAllDescreption , "h-fit " : seeAllDescreption } )} />
    <div className="flex px-6 w-full py-1 justify-around flex-col " >
     <Title  title={city.name} titleClassName="text-2xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark" descreption={subtitle}  />
      { descreption &&  <P className="text-sm" >{ seeAllDescreption ? descreption  :  descreption?.slice(0 ,extractedIndex ) }{ extractedIndex < descreption.length &&  (  seeAllDescreption ?  <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(false)} >... {t("seeLess")}</span>  :     <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(true)} >... {t("seeMore")}</span> )}</P> }
<div className="flex  justify-between gap-6  " ><div className="flex gap-5" ><FavoriteBorderIcon onClick={()=>axios.post("/api/likes" , {userName : userLogin} )} /><ThumbDownOffAltIcon/><CommentIcon/> </div><div className="flex gap-6 justiyf-center" ><PrimaryBtn size={ButtonsSizes.small} className="py-0 text-sm" onClick={()=>setViewLandMarks((val)=>!val)} > {viewLandMarks ? <i className="bi m-0 text-sm bi-chevron-up"></i> : <i className= "bi m-0  bi-chevron-down " ></i> } {t("Explore Landmarks")}  </PrimaryBtn><SecondaryBtn className="py-0 text-sm" size={ButtonsSizes.small} >{t("Explore City")}</SecondaryBtn></div></div>
    </div>
    </div>
    {  viewLandMarks && cityWikipediaData.lat && cityWikipediaData.lon &&  <Landmarks city={city} cityLat={cityWikipediaData.lat} cityLon={cityWikipediaData.lon} /> }
   </div>
}