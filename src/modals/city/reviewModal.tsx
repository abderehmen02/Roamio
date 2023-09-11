import { useTranslation } from "@/app/i18n/client";
import { CityDb } from "@/db/models/city"
import { Title } from "@/ui/title";
import { H3 } from "@/ui/typography";
import { Box, IconButton, Input, InputBase, Modal, Paper, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import { PrimaryInput } from "@/ui/input";
import { ButtonsSizes, PrimaryBtn } from "@/ui/buttons";
import { useCityCardActions } from "@/hooks/citiCardAction";
import { useMutation } from "@tanstack/react-query";
import { useUsersInfo } from "@/hooks/useGetUsers";
import { ReviewComponent } from "@/components/dashboard/review";
import { isGoogleUser } from "@/types/state/auth/userInfo";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '8px' ,
    transform: 'translate(-50%, -50%)',
    width: 400,
    minHeight: '60vh',
    display :'flex' ,
    flexDirection : 'column' ,
    justifyContent : 'space-between' ,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  


export const ReviewModal : React.FC<{open : boolean , setOpen : React.Dispatch<React.SetStateAction<boolean>> , city : CityDb }> =  ({open , setOpen , city} )=>{
const {t}  = useTranslation()
const [addReview ] = useCityCardActions(city)
const [reviewValue, setReviewValue] = useState<string>("")
const users = useUsersInfo(city.reviews.map(item=>item.userId).filter(item=>item?.length))
const titleDescreption = city.reviews.length ? "See what people are saying about " + city.name + " city" :  "What do you think about " + city.name + " city"

const handleSubmitReview = (e : any )=>{
  e.preventDefault()
  addReview(reviewValue , setReviewValue )
}

return    <Modal
open={open}
onClose={()=>setOpen(false)}
aria-labelledby="parent-modal-title"
aria-describedby="parent-modal-description"
>
<Box sx={{ ...style , width: "fit-content" }}>
<Title title={t("Reviews")}  descreption={titleDescreption}  />
<div style={{maxHeight: '50vh', overflowY: city.reviews.length ? 'scroll' : 'hidden' }} className="flex reviews gap-2 py-4 w-full items-start flex-col" >
{city.reviews.filter(review =>{
  const user = users?.data?.find(item=>item._id === review.userId)
  return Boolean(user) || users.isLoading
}).map(review=>{
if(users.isLoading) return <ReviewComponent review={review.review} />
const user = users?.data?.find(item=>item._id === review.userId)
if(!user) return <span>somme error happened , please try again later</span>
return <ReviewComponent   userName={isGoogleUser(user ) ? user.given_name : user.userName } review={review.review} image={isGoogleUser(user) ? user.picture :    "/unknownProfile.webp"} ></ReviewComponent>})}
</div>
<div className="flex items-center h-20 justify-center gap-1" >
<form onSubmit={handleSubmitReview} style={{borderWidth : 1}} className="bg-white py-2   w-full flex items-center border-black rounded-md px-2" >
  <input value={reviewValue} onChange={(e)=>setReviewValue(e.target.value)} className="w-full" type="text"  placeholder="Write your review" style={{outline : 'none'}} />
  <button type="submit" onClick={handleSubmitReview} className="cursor-pointer" ><SendIcon  /></button>
</form>
</div>
</Box>
</Modal> 
}