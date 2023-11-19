"use client"
import { Modal, styled } from "@mui/material"
import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


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

export const PlacesModal : React.FC<{openPlacesModal : boolean , setOpenPlacesModal : React.Dispatch<React.SetStateAction<boolean>> }> = ({openPlacesModal , setOpenPlacesModal})=>{
const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};


    return <Modal open={openPlacesModal}  onClose={()=>setOpenPlacesModal(false)}  aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
      >   
<ModalContent>
<TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item One" value="4" />
            <Tab label="Item Two" value="5" />
            <Tab label="Item Three" value="6" />
            <Tab label="Item One" value="7" />
            <Tab label="Item Two" value="8" />
            <Tab label="Item Three" value="9" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item One</TabPanel>
        <TabPanel value="5">Item Two</TabPanel>
        <TabPanel value="6">Item Three</TabPanel>
        <TabPanel value="7">Item One</TabPanel>
        <TabPanel value="8">Item Two</TabPanel>
        <TabPanel value="9">Item Three</TabPanel>

      </TabContext></ModalContent>
    </Modal>
}