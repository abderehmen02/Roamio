import { useTranslation } from "@/app/i18n/client";
import { CityDb } from "@/db/models/city"
import { Title } from "@/ui/title";
import { H3 } from "@/ui/typography";
import { Box, IconButton, Input, InputBase, Modal, Paper, TextField, Typography, styled } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import { PrimaryInput } from "@/ui/input";
import { ButtonsSizes, PrimaryBtn } from "@/ui/buttons";
import { useCityCardActions } from "@/hooks/citiCardAction";
import { useMutation } from "@tanstack/react-query";
import { useUsersInfo } from "@/hooks/useGetUsers";
import { ReviewComponent } from "@/components/dashboard/review";
import { isGoogleUser } from "@/types/state/auth/userInfo";

const ModalContent = styled(Box)(({theme})=>({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '8px' ,
  backgroundColor : "white"  ,
  transform: 'translate(-50%, -50%)',
  width :300 ,
  minHeight: '60vh',
  display :'flex' ,
  gap : 3 ,
  flexDirection : 'column' ,
  justifyContent : 'space-between' ,
  border: 'none' ,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  paddingTop : 6,
  paddingBottom : 6, 
  paddingRight :3 ,
  paddingLeft : 3 ,
 [theme.breakpoints.up("md")] : {
width : 600  
 }
})) 


export const ReviewModal : React.FC<{open : boolean , setOpen : React.Dispatch<React.SetStateAction<boolean>> , city : CityDb , addReviewFn :((review: string  , setReview : React.Dispatch<React.SetStateAction<string>> )=>void) , deleteReviewFn : (review: string )=>void }> =  ({open , setOpen , city , addReviewFn , deleteReviewFn } )=>{
const {t}  = useTranslation()
const [reviewValue, setReviewValue] = useState<string>("")
const users = useUsersInfo(city.reviews.map(item=>item.userId).filter(item=>item?.length) , [ JSON.stringify(city.reviews)]  )
const titleDescreption = city.reviews.length ? "See what people are saying about " + city.name + " city" :  "What do you think about " + city.name + " city?"
const reviewsListScrollContainer = useRef<HTMLDivElement>(null)
const handleSubmitReview = (e : any )=>{
  e.preventDefault()
  addReviewFn(reviewValue , setReviewValue )
}


useEffect(()=>{
if(reviewsListScrollContainer.current)  reviewsListScrollContainer.current.scrollTop = reviewsListScrollContainer?.current?.scrollHeight;

} , [city.reviews] )

return    <Modal
open={open}
onClose={()=>setOpen(false)}
aria-labelledby="parent-modal-title"
aria-describedby="parent-modal-description"
>
<ModalContent>
<Title title={t("Reviews")} descreptionClassName="text-secondaryDark" descreption={titleDescreption}  />
<div ref={reviewsListScrollContainer} style={{maxHeight: '50vh', overflowY: city.reviews.length ? 'scroll' : 'hidden' }} className="flex reviews  justify-between gap-4 w-full items-start flex-col" >
{city.reviews.filter(review =>{
  const user = users?.data?.find(item=>item._id === review.userId)
  return Boolean(user) || users.isLoading
}).map(review=>{
if(users.isLoading) return <ReviewComponent deleteReviewFn={deleteReviewFn} _id={review._id} review={review.review} />
const user = users?.data?.find(item=>item._id === review.userId)
if(!user) return <span>somme error happened , please try again later</span>
return <ReviewComponent userId={review.userId} deleteReviewFn={deleteReviewFn} _id={review._id}  userName={isGoogleUser(user ) ? user.given_name : user.userName } review={review.review} image={isGoogleUser(user) ? user.picture :    "/unknownProfile.webp"} ></ReviewComponent>})}
</div>
<div className="flex items-center h-20 justify-center gap-1" >
<form onSubmit={handleSubmitReview} style={{borderWidth : 1}} className="bg-white py-2   w-full flex items-center border-black rounded-md px-2" >
  <input value={reviewValue} onChange={(e)=>setReviewValue(e.target.value)} className="w-full" type="text"  placeholder="Write your review" style={{outline : 'none'}} />
  <button type="submit" onClick={handleSubmitReview} className="cursor-pointer" ><SendIcon  /></button>
</form>
</div>
</ModalContent>
</Modal> 
}