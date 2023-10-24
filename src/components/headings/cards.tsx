
import { appConfig } from "@/config";
import { stateType } from "@/state/reducers";
import { UserInfo, isGoogleUser, isUserInfo } from "@/types/state/auth/userInfo";
import { H4 } from "@/ui/typography";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";



export const ProfileCard : React.FC =  ()=>{
    const userInfo   = useSelector((state : stateType)=>state.userInfo)
    if(!isUserInfo(userInfo) ) {toast.error("an error hapened! can not get the user info") 
    return <></>
}
console.log("user info" , userInfo)
    return <div className="flex flex-col gap-3 px-3 py-6 items-center justify-center" >
        <img  className="w-[70px] h-[70px] rounded-full" src={ userInfo.picture|| appConfig.unknownPersonImage} />
          <H4>{isGoogleUser(userInfo)  ? userInfo.given_name : userInfo.userName  }</H4> 
    </div>
}