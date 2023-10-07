"use client"

import { useTranslation } from "@/app/i18n/client"
import { CityDb } from "@/db/models/city"
import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import { cn } from "@/lib/tailwind"
import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { Title } from "@/ui/title"
import {  H3, P } from "@/ui/typography"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Landmarks } from "./landmarks"
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "@/state/actionCreators/action"
import { isUserInfo } from "@/types/state/auth/userInfo"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCityCardActions } from "@/hooks/citiCardAction"
import { ReviewModal } from "@/modals/city/reviewModal"
import { Skeleton } from "@mui/material"
import { CityCardSkeleton } from "@/components/skeletons/city/cityCardSkeleton"
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { useQuery } from "@tanstack/react-query"
import { isCityDb } from "@/types/state/cities"
import axios from "axios"
import { getCity } from "@/functions/api/cities"
import { useSearchParams } from "next/navigation"
import { QueryObjParams } from "@/utils/queryCities"

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




export const CityDbInfo : React.FC<{citydb : CityDb , query : string , seeMoreInfo : boolean , setSeeMoreInfo : Dispatch<SetStateAction<boolean>> ,  }> = ({citydb , query , seeMoreInfo  , setSeeMoreInfo  , } )=>{
const urlSearchParams = new URLSearchParams(query)
const currentCategories : string[] = JSON.parse(urlSearchParams.get(QueryObjParams.categories) || '[]')
return <div className="flex flex-col" >
{ currentCategories.length ?  <div className={cn("flex "  , {"justify-between" : !seeMoreInfo } )} ><div className="flex " ><P className="text-sm">categories:</P><div className="mx-1 flex" >{ Array.from(new Set( citydb.categories.filter(category=>currentCategories.includes(category.name)))).slice(0 , 5).map(category=><P key={category.name} className="text-sm mr-1" >{category.name} </P>)}</div></div>{ !seeMoreInfo &&  <P  className="text-sm cursor-pointer" onClick={()=>setSeeMoreInfo(true)} >See More</P>}</div> : <P className={cn("cursor-pointer font-bold underline"  , {"invisible" : seeMoreInfo} ) } onClick={()=>setSeeMoreInfo(true)} >Explore City Info</P> }
{ seeMoreInfo &&  <div className="flex flex-col text-sm" >
<P >country: <span className="mx-1" >{citydb.country}</span></P>
<P>continent: <span className="mx-1">{citydb.continent}</span> </P>
<P className="lowercase" >price: <span className="mx-1 lowercase" >{citydb.price}</span></P>
<div className="flex" ><P>Best times to visit the city: </P><div className="flex mx-1" > {citydb.yearTimes.slice(0 , 5).map(time=><P key={time} className="mx-1"  >{time}</P>)}</div></div>
<div className="flex" ><P>Languages spoken in the city</P><div className="flex mx-1" >{citydb.languages.map(lan=><P key={lan} className="mx-1" >{lan}</P>)}</div></div>
<div className="flex justify-between"  ><div className="flex" ><P>Dominent Weathers in the city :</P><div className="flex mx-1" >{citydb.weathers.map(weather=><P key={weather}  className="mx-1" >{weather}</P>)}</div></div> { seeMoreInfo &&  <P className="text-sm cursor-pointer" onClick={()=>setSeeMoreInfo(false)} >See Less</P> }</div>
</div>
}
</div>
}




export const CityCard : React.FC<CityDb | {name : string} > =  (cityInfo)=>{
  const [viewLandMarks, setViewLandMarks] = useState<boolean>(false)
  const [seeMoreInfo, setSeeMoreInfo] = useState(false)
   const [seeAllDescreption, setSeeAllDescreption] = useState(false)
  const cityWikipediaData   =  usePlaceWikipediaData(cityInfo.name)
  const loginInfo = useSelector((state : stateType)=>state.login)
  const searchParams = useSearchParams()
  const userInfo = useSelector((state: stateType)=>state.userInfo)
  const [openCommentModal, setOpenCommentModal] = useState(false)
  const {t} = useTranslation()
  const {data : fetchedCityDb , error , refetch , isLoading} = useQuery({
    queryKey: [cityInfo.name] ,
    queryFn : ()=>{ return getCity(cityInfo.name) } ,
    onSuccess : receiveCityDbData ,
    enabled : !isCityDb(cityInfo) ,
  })

  const cityDb : CityDb | undefined =     isCityDb(cityInfo) ? cityInfo :  fetchedCityDb
  const [city , setCity]  = useState<CityDb | undefined>(cityDb)
  const [ addReview , likeCity  , unlikeCity , dislikeCity  , cancelDislike , saveCity , unsaveCity , deleteReviewFn, loadingSave    , loadingLike  , loadingDislke ] = useCityCardActions(city , setCity )
 
  
    const isSavedCity = isUserInfo(userInfo) && userInfo.savedCities.includes(cityInfo.name)
    if(cityWikipediaData.loading ) return <CityCardSkeleton/>
    if(cityWikipediaData.title === "Karen Blixen Museum") console.log("city wikipedia data" , cityWikipediaData)
    if(cityWikipediaData.error || !cityWikipediaData.infoAvailble || cityWikipediaData.descreption === "Topics referred to by the same term"  ) return null
    const {descreption , image , lat , lon , subtitle , imageAspectRacio } = cityWikipediaData
  
     const extractedIndex = generateExtractDescreptionIndex(descreption?.length as number , imageAspectRacio as number )








function receiveCityDbData (data: CityDb): void{
  setCity(data)
}


//functions      






    return <div  className="flex flex-col shadow-md   bg-white rounded-xl  border-stone-600" >
   { isCityDb(city) &&  <ReviewModal deleteReviewFn={deleteReviewFn} addReviewFn={addReview} open={openCommentModal} city={city} setOpen={setOpenCommentModal}  /> }
    <div  className=" flex" >
    <img  src={image}  style={{width : '300px' , objectFit: 'cover' ,  }} className={ cn( "rounded-l-xl border-2 " , {"h-full" : !seeAllDescreption && !seeMoreInfo  , "h-fit " : seeAllDescreption || seeMoreInfo } )} />
    <div className="flex px-6 w-full py-1 justify-around flex-col " >
     <Title  title={cityWikipediaData.title} titleClassName="text-2xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark" descreption={subtitle}  />
      { descreption &&  <P className="text-sm" >{ seeAllDescreption ? descreption  :  descreption?.slice(0 ,extractedIndex ) }{ extractedIndex < descreption.length &&  (  seeAllDescreption ?  <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(false)} > {t("seeLess")}</span>  :     <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(true)} >...{t("seeMore")}</span> )}</P> }
<div className={cn("flex items-center justify-between gap-6 py-1" , {"py-3" : seeAllDescreption })} >{ loginInfo.token?.length  &&  <div className="flex items-center justify-center gap-5 h-4  " >  
{ isUserInfo(userInfo) && isCityDb(city) && <div className="flex items-center justify-center gap-1" >{  ( city.likes.includes(userInfo._id) ? <div  onClick={ !loadingLike ? unlikeCity : undefined  } className={cn("cursor-pointer" , {"opacity-40"  : loadingLike} )} ><FavoriteIcon/></div> : <FavoriteBorderIcon className={cn("cursor-pointer" , {"opacity-40" :loadingLike }) } onClick={ !loadingLike  ?likeCity  :undefined }   /> ) } {city.likes.length} </div>  }
{ isUserInfo(userInfo) && isCityDb(city) && <div className={ cn( "flex items-center justify-center gap-1"  , {"opacity-40" : loadingDislke} )} >{  ( city.dislikes.includes(userInfo._id) ?  <div onClick={ !loadingDislke ? cancelDislike : undefined }  className="cursor-pointer" > <ThumbDownIcon   /></div> : <ThumbDownOffAltIcon className={cn("cursor-pointer" ,{"opacity-40" : loadingDislke})}  onClick={ !loadingDislke ?  dislikeCity : undefined  }   /> ) } {city.dislikes.length} </div>  }
<div onClick={()=>setOpenCommentModal(true)} ><CommentIcon style={{cursor : "pointer"}} /></div> 
</div>}

<div className="flex gap-6 justiyf-center" >
{ isUserInfo(userInfo) && isCityDb(city) && <PrimaryBtn onClick={()=> isSavedCity ? unsaveCity() :  saveCity()} className={cn("py-0" , {"opacity-40" : loadingSave })} size={ButtonsSizes.small} >{isSavedCity ? "Saved" : "Save"}  {userInfo.savedCities?.includes(city.name) ? <TurnedInOutlinedIcon style={{width : 20 , height : 20 } } />   : <TurnedInNotOutlinedIcon style={{width : 20 , height : 20 } } /> } </PrimaryBtn> }
  <PrimaryBtn size={ButtonsSizes.small} className="py-0 " onClick={()=>setViewLandMarks((val)=>!val)} > {viewLandMarks ? <i className="bi m-0 text-sm bi-chevron-up"></i> : <i className= "bi m-0  bi-chevron-down " ></i> } {t("Explore Landmarks")}  </PrimaryBtn><SecondaryBtn className="py-0" size={ButtonsSizes.small} >{t("Explore City")}</SecondaryBtn>
</div></div>
{cityDb && <CityDbInfo setSeeMoreInfo={setSeeMoreInfo} seeMoreInfo={seeMoreInfo} citydb={cityDb} query={searchParams.toString()} />}
    </div>
    </div>
    { isCityDb(city) && viewLandMarks && cityWikipediaData.lat && cityWikipediaData.lon &&  <Landmarks city={city} cityLat={cityWikipediaData.lat} cityLon={cityWikipediaData.lon} /> }
   </div>
}