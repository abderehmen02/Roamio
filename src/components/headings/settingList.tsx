"use client"

import { useTranslation } from "@/app/i18n/client"
import { appConfig } from "@/config"
import { logout } from "@/functions/api/auth"
import { cn } from "@/lib/tailwind"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { H4, P } from "@/ui/typography"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import NotesIcon from '@mui/icons-material/Notes';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ArticleIcon from '@mui/icons-material/Article';

export const SettingsList : React.FC = ()=>{
    const router= useRouter()
    const dispatch = useDispatch()
return     <div   className="flex menu shadow-2xl px-4 flex-col items-center" >
    <Link href={appConfig.links.savedCities}  className="py-3 gap-3  cursor-pointer items-center justify-start hoverSettingsList  thinBorderBottom  flex px-7 border-black w-full " ><NotesIcon/><H4 className=" text-center  w-fit" >Saved Cities</H4>  </Link> 
    <Link href="/notes" className="flex gap-3 items-center justify-start cursor-pointer py-3 hoverSettingsList thinBorderBottom    border-black w-full px-7" ><ArticleIcon/><H4 className="w-fit text-center" > Your Notes</H4></Link>
    <div onClick={()=>logout(dispatch , router.push)} className="py-3 flex items-center justify-start gap-3  cursor-pointer hoverSettingsList thinBorderBottom px-7   border-black w-full " ><NotInterestedIcon/><P className="w-fit text-center" >Logout</P></div>
    </div>

}
// , {  "shadow-xl bg-white"  :OpenList  }
export const Settings = ()=>{ 
const {t} = useTranslation()
const [OpenList, setOpenList] = useState(false)
    return <div  className={cn("items-center w-64   rounded-t-3xl flex gap-2 relative rounded-b-xl  flex-col  "  )}> 
    <SecondaryBtn  className="w-full px-5 z-30 "  onClick={(e)=>{ e.preventDefault() ; e.stopPropagation() ; setOpenList((val)=>  !val)     }}  >  {t("loggedHeader.settings")}   <i className="bi bi-gear-fill"></i> </SecondaryBtn>
    <div  className={cn({" bg-white absolute top-14 w-full rounded-xl " : OpenList , "hidden" : !OpenList })} >  <SettingsList/>  </div>
    </div>
}