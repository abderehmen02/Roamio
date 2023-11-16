"use client"

import { useTranslation } from "@/app/i18n/client"
import { appConfig } from "@/config"
import { cn } from "@/lib/tailwind"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { H2, H3 } from "@/ui/typography"
import Link from "next/link"
import { useEffect, useState } from "react"



export const UnlogedMobileHeader = ()=>{
    const {t} = useTranslation()
    const [openNav , setOpenNav]= useState<boolean>(false)


useEffect(()=>{
window.addEventListener("click"  ,()=> setOpenNav(false))
    return()=>{
        window.removeEventListener("click"  ,()=> setOpenNav(false))
    }
}  ,  )

    return <div onClick={(e)=>e.stopPropagation()} className="staticBg flex w-full z-30 items-center fixed   top-0 justify-between" >
<i  onClick={()=>setOpenNav(true)}  className={cn("bi bi-list-stars mx-5 text-4xl block" , {"invisible" : openNav })}></i>
<div   className={cn("flex fixed top-0 left-0 bg-white flex-col shadow-xl items-center justify-center gap-6 px-8 py-4 z-40 " , {"hidden" : !openNav} )} >
<Link href={appConfig.links.home} className="flex items-center mb-6" ><img src={appConfig.logoImage} className="w-16 h-16" /><H2>{appConfig.name}</H2></Link>
<Link href={appConfig.links.login}> <PrimaryBtn>{t("unlogedHeader.signIn")} <i className="bi bi-person"></i> </PrimaryBtn></Link>
<Link href={appConfig.links.signUp}> <SecondaryBtn>{t("unlogedHeader.signUp")} <i className="bi bi-person-add"></i> </SecondaryBtn></Link>
<Link href={appConfig.links.blog} > <H3 className="text-primary underline " > {t("unlogedHeader.blog")}</H3></Link>
<Link href={appConfig.links.findCities} ><H3 className="text-primary underline" >{t("find city")}</H3></Link>
<i onClick={()=>setOpenNav(false)} className="bi bi-x-lg text-4xl text-red-500 hover:text-red-800"></i>
</div>
<Link href={appConfig.links.home} > <img src={appConfig.logoImage} className={cn("w-16 h-16" , {"invisible" : openNav }) } /></Link>
    </div>
}