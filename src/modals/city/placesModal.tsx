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
  width : 1200 ,
  maxWidth : "90vw"  
  })) 

export const PlacesModal : React.FC<{ places : PlaceDb[] , categories : Category[] , openPlacesModal : boolean , setOpenPlacesModal : React.Dispatch<React.SetStateAction<boolean>> }> = ({  places , categories , openPlacesModal , setOpenPlacesModal})=>{
  const filteredCategories  = categories?.filter(category=>places.some(place=>place.category === category))
const [value, setValue] = React.useState<Category>(filteredCategories[0]);

const handleChange = (event: React.SyntheticEvent, newValue: Category) => {
  setValue(newValue);
};

    return <Modal open={openPlacesModal}  onClose={()=>setOpenPlacesModal(false)}  aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
    className="placesModal"

      >   
<ModalContent      className="placesModal" >
<TabContext value={value}>
        <Box sx={{ borderBottom: 1 , borderColor: 'divider' }}>
          <TabList  className="px-6" onChange={handleChange} aria-label="lab API tabs example">
            {
               filteredCategories?.map(category=>            <Tab key={category} label={category} value={category}/>                )
            }
          </TabList>
        </Box>
        {
            filteredCategories?.map(category=><TabPanel key={category} sx={{ padding : "0px"}} value={category}><div className="flex flex-col items-center justify-center gap-5 px-3 py-5" >{ places.filter(place =>place.category === category).map(place=><PlaceDisplayer key={place.place} placeName={place.place} />) }</div></TabPanel>
            )
        }

      </TabContext></ModalContent>
    </Modal>
}