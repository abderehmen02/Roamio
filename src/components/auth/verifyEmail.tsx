import { appConfig } from "@/config";
import { logout } from "@/functions/api/auth";
import { stateType } from "@/state/reducers";
import { isUserInfo } from "@/types/state/auth/userInfo";
import { ButtonsSizes, PrimaryBtn } from "@/ui/buttons";
import { H4 } from "@/ui/typography";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export const VerifyEmail : React.FC = ()=>{
const dispatch = useDispatch()
const router  = useRouter()
const userInfo = useSelector((state : stateType)=>state.userInfo)

// if(!isUserInfo(userInfo)) return   logout(dispatch  , router.push , appConfig.links.login)

     return <div className="flex items-center px-2 gap-5 jusitfy-center py-12 flex-col" >
    <H4  className="text-center" >We sent a message to your email. please check and verify your email: {isUserInfo(userInfo) && userInfo.email} </H4>
    <PrimaryBtn size={ButtonsSizes.medium} onClick={()=>logout(dispatch  , router.push , appConfig.links.login)} >Log Out</PrimaryBtn>
    </div>
}






