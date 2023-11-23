"use client"
import { appConfig } from "@/config";
import { stateType } from "@/state/reducers";
import {  isGoogleUser, isUserInfo } from "@/types/state/auth/userInfo";
import { H4 } from "@/ui/typography";
import Reactn  from "react";
import { useSelector } from "react-redux";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from "axios";
import {ref , listAll , uploadBytes, getDownloadURL } from "firebase/storage"
import { firebaseStorage } from "@/db/firebase";

export const ProfileCard : React.FC =  ()=>{
    const userInfo   = useSelector((state : stateType)=>state.userInfo)
  

    const uploadImage : React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        try {
          if(event.target.files &&  event.target.files[0]){
          const imgRef = ref(firebaseStorage , "files/image")
         const imgSnapshot = await   uploadBytes( imgRef , event.target.files[0] )
         const imgUrl = await getDownloadURL(imgRef)
         console.log("img url ",imgUrl)
         }
        }
          
         catch (error) {
          console.error(error);
        }
      };    

    if(!isUserInfo(userInfo) ) {
    return <></>
}
    return <div className="flex  flex-col gap-3 px-3 py-6 items-center justify-center" >
        <div className="relative group  w-[70px] h-[70px] rounded-full  border-2 border-red-600  bg-secondary "  >
        <AddAPhotoIcon className="absolute opacity-50 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <img  className=" w-full h-full rounded-full" src={ userInfo.picture|| appConfig.unknownPersonImage} />
        <input onChange={uploadImage}  type="file" className="w-[70px] h-[70px] absolute top-0 left-0  rounded-full items-center justify-center border-green-600   opacity-0 cursor-pointer" />
        </div>
          <H4>{isGoogleUser(userInfo)  ? userInfo.given_name : userInfo.userName  }</H4> 
    </div>
}