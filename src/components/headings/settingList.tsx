"use client"

import { useTranslation } from "@/app/i18n/client"
import { appConfig } from "@/config"
import { logout } from "@/functions/api/auth"
import { cn } from "@/lib/tailwind"
import { PrimaryBtn, SecondaryBtn, TextButton } from "@/ui/buttons"
import { H4, P } from "@/ui/typography"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import NotesIcon from '@mui/icons-material/Notes';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ArticleIcon from '@mui/icons-material/Article';
import { ProfileCard } from "./cards"

export const SettingsList : React.FC<{setOpenList : React.Dispatch<React.SetStateAction<boolean>>}> = ({setOpenList})=>{
    const router= useRouter()
    const dispatch = useDispatch()
return     <div   className="flex menu shadow-2xl px-4 flex-col items-center" >
    <ProfileCard/>
    <Link href={appConfig.links.savedCities}  className="py-3 gap-3  cursor-pointer items-center justify-start hoverSettingsList  thinBorderBottom  flex px-7 border-black w-full " ><NotesIcon/><H4 className=" text-center  w-fit" >Saved Cities</H4>  </Link> 
    {/* <Link href="/notes" className="flex gap-3 items-center justify-start cursor-pointer py-3 hoverSettingsList thinBorderBottom    border-black w-full px-7" ><ArticleIcon/><H4 className="w-fit text-center" > Your Notes</H4></Link> */}
    <div onClick={()=>logout(dispatch , router)} className="py-3 flex items-center justify-start gap-3  cursor-pointer hoverSettingsList thinBorderBottom px-7   border-black w-full " ><NotInterestedIcon/><P className="w-fit text-center" >Logout</P></div>
    <i onClick={()=>setOpenList(false)} className="bi bi-x-lg laptop:hidden text-red-500 text-2xl my-2"></i>
    </div>

}
// , {  "shadow-xl bg-white"  :OpenList  }
export const Settings = ()=>{ 
const {t} = useTranslation()
const [OpenList, setOpenList] = useState(false)

useEffect(()=>{
window.addEventListener("click" , ()=>{
    setOpenList(false)
})
} , [] )
    return <div onClick={(e)=>e.stopPropagation()} className={cn("items-end  laptop:items-center w-64 laptop:w-64  rounded-t-3xl flex gap-2 relative rounded-b-xl  flex-col  "  )}> 
    <i onClick={(e)=>{ e.stopPropagation() ; setOpenList(true)}} className="bi text-4xl  laptop:hidden bi-gear-fill"></i>
    <TextButton  className="w-full hidden laptop:block px-5 z-30 "  onClick={(e)=>{ e.preventDefault() ; e.stopPropagation() ; setOpenList((val)=>  !val)     }}  >  {t("loggedHeader.settings")}   <i className="bi bi-gear-fill"></i> </TextButton>
    <div  className={cn({" bg-white w-64 laptop:w-full absolute top-14   " : OpenList , "hidden" : !OpenList })} >  <SettingsList setOpenList={setOpenList} />  </div>
    </div>
}