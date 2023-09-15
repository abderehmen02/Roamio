"use client"

import { useTranslation } from "@/app/i18n/client"
import { cn } from "@/lib/tailwind"
import { SecondaryBtn } from "@/ui/buttons"
import { H4 } from "@/ui/typography"
import React, { useState } from "react"



export const SettingsList : React.FC = ()=>{
return     <div className="flex gap-2 py-2 px-2 flex-col items-center" >
    <div style={{borderWidth : '0.5px'}} className="py-1  px-2 border-black w-full " ><H4>Saved Cities</H4></div> 
    <div style={{borderWidth : '0.5px'}} className="py-1  px-2   border-black w-full " ><H4> Your Notes</H4></div>
    </div>

}

export const Settings = ()=>{
const {t} = useTranslation()
const [OpenList, setOpenList] = useState(true)
    return <div  className={cn("relative rounded-t-3xl  rounded-b-xl  flex-col  " , {  "border-2 border-black bg-white"  :OpenList  } )}> <SecondaryBtn  className="w-full px-5"  onClick={()=>setOpenList((val)=>  !val)}  >  {t("loggedHeader.settings")}   <i className="bi bi-gear-fill"></i> </SecondaryBtn>
    <div className={cn({"visible" : OpenList , "invisible" : !OpenList })} >  <SettingsList/>  </div>
    </div>
}