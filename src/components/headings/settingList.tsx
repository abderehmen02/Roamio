"use client"

import { useTranslation } from "@/app/i18n/client"
import { SecondaryBtn } from "@/ui/buttons"
import React, { useState } from "react"



export const SettingsList : React.FC = ()=>{
return     <div className="flex flex-col items-center" >
    <div>Saved Cities</div> 
    <div>Your Notes</div>
    </div>

}

export const Settings = ()=>{
const {t} = useTranslation()
const [OpenList, setOpenList] = useState(false)
    return <div className="relative z-20 flex-col " > <SecondaryBtn onClick={(val)=>setOpenList(!val)}  >  {t("loggedHeader.settings")}   <i className="bi bi-gear-fill"></i> </SecondaryBtn>
    <SettingsList/>
    </div>
}