"use client"

import { useTranslation } from "@/app/i18n/client"
import { CityDb } from "@/db/models/city"
import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import { cn } from "@/lib/tailwind"
import { ButtonsSizes, PrimaryBtn} from "@/ui/buttons"
import { Title } from "@/ui/title"
import {   P } from "@/ui/typography"
import { Dispatch, SetStateAction,useState } from "react"
import { Landmarks } from "./landmarks"
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { isUserInfo } from "@/types/state/auth/userInfo"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCityCardActions } from "@/hooks/citiCardAction"
import { ReviewModal } from "@/modals/city/reviewModal"
import { CityCardSkeleton } from "@/components/skeletons/city/cityCardSkeleton"
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { useQuery } from "@tanstack/react-query"
import { isCityDb } from "@/types/state/cities"
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
{ currentCategories.length ?<> <div className={cn("hidden laptop:flex"  , {"justify-between" : !seeMoreInfo } )} ><div className="flex " ><P className="text-sm">categories:</P><div className="mx-1 flex" >{ Array.from(new Set( citydb.categories.filter(category=>currentCategories.includes(category.name)))).slice(0 , 5).map(category=><P key={category.name} className="text-sm mr-1" >{category.name} </P>)}</div></div>{ !seeMoreInfo &&  <P  className="text-sm cursor-pointer" onClick={()=>setSeeMoreInfo(true)} >See More</P>}</div>
<div className="flex laptop:hidden items-center justify-between " ><div className="flex gap-3 items-center" ><P  className="text-sm inline">categories:</P><div className="inline  " >{ Array.from(new Set( citydb.categories.filter(category=>currentCategories.includes(category.name)))).slice(0 , 5).map(category=><P key={category.name} className="inline text-sm" >{category.name} </P>)}</div></div>{ !seeMoreInfo &&  <P className="text-sm"  onClick={()=>setSeeMoreInfo(true)} >See More</P>}</div>
</> : <P className={cn("cursor-pointer font-bold underline"  , {"invisible" : seeMoreInfo} ) } onClick={()=>setSeeMoreInfo(true)} >Explore City Info</P> }
{ seeMoreInfo &&  <div className="flex flex-col text-sm" >
<P >country: <span className="mx-1" >{citydb.country}</span></P>
<P>continent: <span className="mx-1">{citydb.continent}</span> </P>
<P className="lowercase" >price: <span className="mx-1 lowercase" >{citydb.price}</span></P>
<div className="flex" ><P>Best times to visit<span className="hidden tablet:inline" >the city</span>: </P><div className="flex mx-1" > {citydb.yearTimes.slice(0 , 5).map(time=><P key={time} className="mx-1"  >{time}</P>)}</div></div>
<div className="flex" ><P>Languages spoken <span className="hidden tablet:inline" >in the city</span>:</P><div className="flex mx-1" >{citydb.languages.map(lan=><P key={lan} className="mx-1" >{lan}</P>)}</div></div>
<div className="flex justify-between"  ><div className="flex" ><P><span className="hidden laptop:inline" >Dominent</span> Weathers <span className="hidden tablet:inline" >in the city</span> :</P><div className="flex mx-1" >{citydb.weathers.map(weather=><P key={weather}  className="mx-1" >{weather}</P>)}</div></div> { seeMoreInfo &&  <P className="text-sm cursor-pointer" onClick={()=>setSeeMoreInfo(false)} ><br className="laptop:hidden" />See Less</P> }</div>
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






    return <div  className="flex w-full flex-col shadow-md  relative bg-white rounded-xl  border-stone-600" >
   { isCityDb(city) &&  <ReviewModal deleteReviewFn={deleteReviewFn} addReviewFn={addReview} open={openCommentModal} city={city} setOpen={setOpenCommentModal}  /> }
    <div  className="flex-col laptop:flex-row flex" >
    <img  src={image}  style={{ minHeight: '200px' , objectFit: 'cover' ,  }} className={ cn( "w-full laptop:w-[300px] rounded-l-xl border-2 " , {"h-full" : !seeAllDescreption && !seeMoreInfo  , "h-fit " : seeAllDescreption || seeMoreInfo } )} />
    <div className="flex px-6 w-full py-1 justify-around flex-col " >
     <Title  title={cityWikipediaData.title}  titleClassName="  text-2xl" className="laptop:flex-row items-start   laptop:items-center  justify-start bg-secondary w-fit laptop:gap-7"  descreptionClassName="font-bold text-secondaryDark  text-start" descreption={subtitle}  />
      { descreption &&  <P style={{maxWidth : '100%'}} className="text-sm block max-w-full break-words" >{ seeAllDescreption ? descreption  :  descreption?.slice(0 ,extractedIndex ) }{ extractedIndex < descreption.length &&  (  seeAllDescreption ?  <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(false)} > {t("seeLess")}</span>  :     <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(true)} >...{t("seeMore")}</span> )}</P> }
<div className={cn("flex items-center  flex-col laptop:flex-row gap-3 my-4 laptop:my-0 justify-center laptop:gap-6 py-1" , {"py-3" : seeAllDescreption })} >{ loginInfo.token?.length  &&  <div className="flex items-center justify-around w-full laptop:w-fit laptop:justify-center gap-5 h-4  " >  
{ isUserInfo(userInfo) && isCityDb(city) && <div className="flex items-center justify-center gap-1" >{  ( city.likes.includes(userInfo._id) ? <div  onClick={ !loadingLike ? unlikeCity : undefined  } className={cn("cursor-pointer" , {"opacity-40"  : loadingLike} )} ><FavoriteIcon/></div> : <FavoriteBorderIcon className={cn("cursor-pointer" , {"opacity-40" :loadingLike }) } onClick={ !loadingLike  ?likeCity  :undefined }   /> ) } {city.likes.length} </div>  }
{ isUserInfo(userInfo) && isCityDb(city) && <div className={ cn( "flex items-center justify-center gap-1"  , {"opacity-40" : loadingDislke} )} >{  ( city.dislikes.includes(userInfo._id) ?  <div onClick={ !loadingDislke ? cancelDislike : undefined }  className="cursor-pointer" > <ThumbDownIcon   /></div> : <ThumbDownOffAltIcon className={cn("cursor-pointer" ,{"opacity-40" : loadingDislke})}  onClick={ !loadingDislke ?  dislikeCity : undefined  }   /> ) } {city.dislikes.length} </div>  }
<div onClick={()=>setOpenCommentModal(true)} ><CommentIcon style={{cursor : "pointer"}} /></div> 
<div className="laptop:hidden" >{ isUserInfo(userInfo) && isCityDb(city) &&  userInfo.savedCities?.includes(city.name) ? <TurnedInOutlinedIcon style={{width : 20 , height : 20 } } onClick={()=> isSavedCity ? unsaveCity() :  saveCity()} />   : <TurnedInNotOutlinedIcon onClick={()=> isSavedCity ? unsaveCity() :  saveCity()} style={{width : 20 , height : 20 } } />  }</div>
</div>}

<div className="flex gap-6 w-full laptop:w-fit justiyf-center" >
{ isUserInfo(userInfo) && isCityDb(city) && <PrimaryBtn onClick={()=> isSavedCity ? unsaveCity() :  saveCity()} className={cn("py-0 hidden laptop:block" , {"opacity-40" : loadingSave })} size={ButtonsSizes.small} >{isSavedCity ? "Saved" : "Save"}  {userInfo.savedCities?.includes(city.name) ? <TurnedInOutlinedIcon style={{width : 20 , height : 20 } } />   : <TurnedInNotOutlinedIcon style={{width : 20 , height : 20 } } /> } </PrimaryBtn> }
  <PrimaryBtn  size={ButtonsSizes.small} className="py-0 w-full laptop:w-fit " onClick={()=>setViewLandMarks((val)=>!val)} > {viewLandMarks ? <i className="bi m-0 text-sm bi-chevron-up"></i> : <i className= "bi m-0  bi-chevron-down " ></i> } {t("Explore Landmarks")}  </PrimaryBtn>
</div></div>
{/* {cityDb && <CityDbInfo setSeeMoreInfo={setSeeMoreInfo} seeMoreInfo={seeMoreInfo} citydb={cityDb} query={searchParams.toString()} />} */}
    </div>
    </div>
    { isCityDb(city) && viewLandMarks && cityWikipediaData.lat && cityWikipediaData.lon &&  <Landmarks city={city} cityLat={cityWikipediaData.lat} cityLon={cityWikipediaData.lon} /> }
   </div>
}