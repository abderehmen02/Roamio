"use client"
import { appConfig } from "@/config";
import { stateType } from "@/state/reducers";
import { UserInfo, isGoogleUser, isUserInfo } from "@/types/state/auth/userInfo";
import { H4 } from "@/ui/typography";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


export const ProfileCard : React.FC =  ()=>{
    const userInfo   = useSelector((state : stateType)=>state.userInfo)
    if(!isUserInfo(userInfo) ) {
    return <></>
}
    return <div className="flex  flex-col gap-3 px-3 py-6 items-center justify-center" >
        <div className="relative group  w-[70px] h-[70px] rounded-full  border-2 border-red-600  bg-secondary "  >
        <AddAPhotoIcon className="absolute opacity-50 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <img  className=" w-full h-full rounded-full" src={ userInfo.picture|| appConfig.unknownPersonImage} />
        <input type="file" className="w-[70px] h-[70px] absolute top-0 left-0  rounded-full items-center justify-center border-green-600   opacity-0 cursor-pointer" />
        </div>
          <H4>{isGoogleUser(userInfo)  ? userInfo.given_name : userInfo.userName  }</H4> 
    </div>
}