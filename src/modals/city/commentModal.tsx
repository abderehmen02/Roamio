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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
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
  


export const CommentModal : React.FC<{open : boolean , setOpen : React.Dispatch<React.SetStateAction<boolean>> , city : CityDb }> =  ({open , setOpen , city} )=>{
const {t}  = useTranslation()
const [addReview ] = useCityCardActions(city)
const [reviewValue, setReviewValue] = useState<string>("")

const titleDescreption = city.reviews.length ? "See what people are saying about " + city.name + " city" :  "What do you think about " + city.name + " city"
return    <Modal
open={open}
onClose={()=>setOpen(false)}
aria-labelledby="parent-modal-title"
aria-describedby="parent-modal-description"
>
<Box sx={{ ...style , width: "fit-content" }}>
<Title title={t("Reviews")}  descreption={titleDescreption}  />
<div className="flex items-center h-20 justify-center gap-1" >
<div style={{borderWidth : 1}} className="bg-white py-2   w-full flex items-center border-black rounded-md px-2" >
  <input value={reviewValue} onChange={(e)=>setReviewValue(e.target.value)} className="w-full" type="text"  placeholder="Write your review" style={{outline : 'none'}} />
  <div onClick={()=>addReview(reviewValue)} ><SendIcon  /></div>
</div>
</div>
</Box>
</Modal> 
}