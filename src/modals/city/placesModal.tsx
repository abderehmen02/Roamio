"use client"
import { Modal, styled } from "@mui/material"
import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { PlaceDb } from "@/db/models/city";
import { Categories, Category } from "@/types/prefrences";
import { PlaceDisplayer } from "@/components/city/placeDisplayer";


const ModalContent = styled(Box)(({theme})=>({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    overflowX : "scroll" ,
    borderRadius: '8px' ,
    backgroundColor : "white"  ,
    transform: 'translate(-50%, -50%)',
    minHeight: '60vh',
    overflowY : "scroll" ,
    maxHeight :"90vh" ,
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
  width : 1200 ,
  maxWidth : "95vw" 
   }
  })) 

export const PlacesModal : React.FC<{ places : PlaceDb[] , categories : Category[] , openPlacesModal : boolean , setOpenPlacesModal : React.Dispatch<React.SetStateAction<boolean>> }> = ({  places , categories , openPlacesModal , setOpenPlacesModal})=>{
const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

const filteredCategories  = categories?.filter(category=>places.some(place=>place.category === category))
    return <Modal open={openPlacesModal}  onClose={()=>setOpenPlacesModal(false)}  aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
      >   
<ModalContent>
<TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            {
               filteredCategories?.map(category=>            <Tab label={category} value={category}/>                )
            }
          </TabList>
        </Box>
        {
            filteredCategories?.map(category=><TabPanel value={category}>{ places.filter(place =>place.category === category).map(place=><PlaceDisplayer placeName={place.place} />) }</TabPanel>
            )
        }

      </TabContext></ModalContent>
    </Modal>
}