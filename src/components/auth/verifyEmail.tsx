import { appConfig } from "@/config";
import { logout } from "@/functions/api/auth";
import { stateType } from "@/state/reducers";
import { isUserInfo } from "@/types/state/auth/userInfo";
import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons";
import { H4 } from "@/ui/typography";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {toast} from "sonner"

export const VerifyEmail : React.FC = ()=>{
const dispatch = useDispatch()
const router  = useRouter()
const userInfo = useSelector((state : stateType)=>state.userInfo)

const {data , isError , error , mutate , isLoading } = useMutation({
mutationFn : async ()=>{
const responce = await  axios.post("/api/sendVerifyMessage")
return responce.data
},
onSuccess : ()=>{
    toast.success("Message has been sent!")
},
onError : ()=>{
    toast.error("Something went wrong! please try again.")
}
})


// if(!isUserInfo(userInfo)) return   logout(dispatch  , router.push , appConfig.links.login)

     return <div className="flex items-center px-2 gap-5 jusitfy-center py-12 flex-col" >
    <H4  className="text-center" >We sent a message to your email. please check and verify your email: {isUserInfo(userInfo) && userInfo.email} </H4>
    <div className="flex items-center flex-col tablet:flex-row justify-center gap-5" >
    <SecondaryBtn size={ButtonsSizes.medium} onClick={()=>logout(dispatch  , router.push , appConfig.links.login)} >Log Out</SecondaryBtn>
    <PrimaryBtn onClick={()=>mutate()} loading={isLoading} size={ButtonsSizes.medium} >Resend Verify Message</PrimaryBtn>
    </div>
    </div>
}






