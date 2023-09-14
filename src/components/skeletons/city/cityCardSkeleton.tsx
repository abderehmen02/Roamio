import { Skeleton } from "@mui/material"

export const CityCardSkeleton : React.FC = ()=>{
    return <div className="flex flex-col shadow-md  bg-white rounded-xl  w-full border-stone-600" >
    <div  className=" flex" >
    <Skeleton variant="rectangular"  width={300} height="100%" />
    <div className="flex px-6 w-full py-1 justify-around flex-col " >
     <Skeleton     />
      { descreption &&  <P className="text-sm" >{ seeAllDescreption ? descreption  :  descreption?.slice(0 ,extractedIndex ) }{ extractedIndex < descreption.length &&  (  seeAllDescreption ?  <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(false)} > {t("seeLess")}</span>  :     <span style={{cursor: 'pointer'}} className="capitalize " onClick={()=>setSeeAllDescreption(true)} >...{t("seeMore")}</span> )}</P> }
<div className={cn("flex  justify-between gap-6 py-1" , {"py-3" : seeAllDescreption })} >{ loginInfo.token?.length  &&  <div className="flex items-center justify-center gap-5 h-4  " >  
{ isUserInfo(userInfo) && <div className="flex items-center justify-center gap-1" >{  ( city.likes.includes(userInfo._id) ? <div  onClick={ !loadingLike ? unlikeCity : undefined  } className={cn("cursor-pointer" , {"opacity-40"  : loadingLike} )} ><FavoriteIcon/></div> : <FavoriteBorderIcon className={cn("cursor-pointer" , {"opacity-40" :loadingLike }) } onClick={ !loadingLike ?  likeCity : undefined }   /> ) } {city.likes.length} </div>  }
{ isUserInfo(userInfo) && <div className={ cn( "flex items-center justify-center gap-1"  , {"opacity-40" : loadingDislke} )} >{  ( city.dislikes.includes(userInfo._id) ?  <div onClick={ !loadingDislke ? cancelDislike : undefined }  className="cursor-pointer" > <ThumbDownIcon   /></div> : <ThumbDownOffAltIcon className={cn("cursor-pointer" ,{"opacity-40" : loadingDislke})}  onClick={ !loadingDislke ?  dislikeCity : undefined  }   /> ) } {city.dislikes.length} </div>  }
<div onClick={()=>setOpenCommentModal(true)} ><CommentIcon style={{cursor : "pointer"}} /></div> </div>}<div className="flex gap-6 justiyf-center" ><PrimaryBtn size={ButtonsSizes.small} className="py-0 " onClick={()=>setViewLandMarks((val)=>!val)} > {viewLandMarks ? <i className="bi m-0 text-sm bi-chevron-up"></i> : <i className= "bi m-0  bi-chevron-down " ></i> } {t("Explore Landmarks")}  </PrimaryBtn><SecondaryBtn className="py-0" size={ButtonsSizes.small} >{t("Explore City")}</SecondaryBtn></div></div>
    </div>
    </div>
    {  viewLandMarks && cityWikipediaData.lat && cityWikipediaData.lon &&  <Landmarks city={city} cityLat={cityWikipediaData.lat} cityLon={cityWikipediaData.lon} /> }
   </div>
}