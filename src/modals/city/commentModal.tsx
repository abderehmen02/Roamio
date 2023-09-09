import { useTranslation } from "@/app/i18n/client";
import { CityDb } from "@/db/models/city"
import { Title } from "@/ui/title";
import { H3 } from "@/ui/typography";
import { Box, IconButton, InputBase, Modal, Paper, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import { PrimaryInput } from "@/ui/input";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  


export const CommentModal : React.FC<{open : boolean , setOpen : React.Dispatch<React.SetStateAction<boolean>> , city : CityDb }> =  ({open , setOpen , city} )=>{
const {t}  = useTranslation()
return    <Modal
open={open}
aria-labelledby="parent-modal-title"
aria-describedby="parent-modal-description"
>
<Box sx={{ ...style , width: "fit-content" }}>
<Title title={t("Reviews")}  descreption={"See what people are saying about " + city.name + "city"}  />
<div className="flex items-center justify-center gap-1" >
 <PrimaryInput/> <SendIcon/>
</div>
</Box>
</Modal> 
}