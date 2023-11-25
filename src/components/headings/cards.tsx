"use client"
import { appConfig } from "@/config";
import { stateType } from "@/state/reducers";
import {  UserInfoActionTypes, isGoogleUser, isUserInfo } from "@/types/state/auth/userInfo";
import { H4 } from "@/ui/typography";
import Reactn  from "react";
import { useSelector } from "react-redux";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { authorizedPostRequest } from "@/utils/auth/autherizedRequest";
import { useUserInfoTools } from "@/hooks/useProfile";

export const ProfileCard : React.FC =  ()=>{
    const userInfo   = useSelector((state : stateType)=>state.userInfo)
    const  {uploadImage , isUploadImageRequest  ,uploadImageProgress } = useUserInfoTools()       

    if(!isUserInfo(userInfo) ) {
    return <></>
}
    return <div className="flex  flex-col gap-3 px-3 py-6 items-center justify-center" >
        <div className="relative group  w-[70px] h-[70px]  rounded-full  border-2  bg-secondary "  >
        <AddAPhotoIcon className="absolute bg-white p-1 rounded-full   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-full h-full bg-white" ><img  className=" w-full h-full rounded-full object-cover" src={ userInfo.profilePic || userInfo.picture||  appConfig.unknownPersonImage} /></div>
        <input onChange={uploadImage}  type="file" className="w-[70px] h-[70px] absolute top-0 left-0  rounded-full items-center justify-center border-green-600   opacity-0 cursor-pointer" />
        </div>
          <H4>{isGoogleUser(userInfo)  ? userInfo.given_name : userInfo.userName  }</H4> 
    </div>
}