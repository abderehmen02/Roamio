"use client"

import { useTranslation } from "@/app/i18n/client"
import { appConfig } from "@/config"
import { logout } from "@/functions/api/auth"
import { cn } from "@/lib/tailwind"
import { SecondaryBtn } from "@/ui/buttons"
import { H4, P } from "@/ui/typography"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { useDispatch } from "react-redux"



export const SettingsList : React.FC = ()=>{
    const router= useRouter()
    const dispatch = useDispatch()
return     <div className="flex gap-2 py-2 px-2 flex-col items-center" >
    <Link href={appConfig.links.savedCities}  className="py-1 cursor-pointer hoverSettingsList  thinBorderBottom  px-2 border-black w-full " ><H4 className="w-full text-center" >Saved Cities</H4></Link> 
    <Link href="/notes" className="py-1 cursor-pointer hoverSettingsList thinBorderBottom px-2   border-black w-full " ><H4 className="w-full text-center" > Your Notes</H4></Link>
    <div onClick={()=>logout(dispatch , router.push)} className="py-1  cursor-pointer hoverSettingsList thinBorderBottom px-2   border-black w-full " ><P className="w-full text-center" >Logout</P></div>
    </div>

}

export const Settings = ()=>{
const {t} = useTranslation()
const [OpenList, setOpenList] = useState(false)
    return <div  className={cn("relative rounded-t-3xl  rounded-b-xl  flex-col  " , {  "border-2 border-black bg-white"  :OpenList  } )}> 
    <SecondaryBtn  className="w-full px-5"  onClick={()=>setOpenList((val)=>  !val)}  >  {t("loggedHeader.settings")}   <i className="bi bi-gear-fill"></i> </SecondaryBtn>
    <div className={cn({"visible" : OpenList , "invisible" : !OpenList })} >  <SettingsList/>  </div>
    </div>
}