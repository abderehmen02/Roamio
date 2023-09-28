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
return     <div   className="flex  menu  shadow-2xl   px-4 flex-col items-center" >
    <Link href={appConfig.links.savedCities}  className="py-3 cursor-pointer hoverSettingsList  thinBorderBottom  px-2 border-black w-full " ><H4 className="w-full text-center" >Saved Cities</H4></Link> 
    <Link href="/notes" className=" cursor-pointer py-3 hoverSettingsList thinBorderBottom px-2   border-black w-full " ><H4 className="w-full text-center" > Your Notes</H4></Link>
    <div onClick={()=>logout(dispatch , router.push)} className="py-3  cursor-pointer hoverSettingsList thinBorderBottom px-2   border-black w-full " ><P className="w-full text-center" >Logout</P></div>
    </div>

}
// , {  "shadow-xl bg-white"  :OpenList  }
export const Settings = ()=>{
const {t} = useTranslation()
const [OpenList, setOpenList] = useState(false)
    return <div  className={cn("w items-center w-64 rounded-t-3xl flex gap-1 relative rounded-b-xl  flex-col  "  )}> 
    <SecondaryBtn  className="w-full px-5 "  onClick={()=>setOpenList((val)=>  !val)}  >  {t("loggedHeader.settings")}   <i className="bi bi-gear-fill"></i> </SecondaryBtn>
    <div  className={cn({"visible bg-white w-full rounded-xl  mx-3" : OpenList , "invisible" : !OpenList })} >  <SettingsList/>  </div>
    </div>
}