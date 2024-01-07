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
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
    typeof window !== "undefined" &&        window.addEventListener('scroll', handleScroll);
        return () => {
    typeof window !== "undefined" &&        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <div onClick={(e)=>e.stopPropagation()} className={cn("flex w-full px-3 py-1 mb-2 z-30 items-center fixed   top-0 justify-between" , {"bg-black text-white" : scrollPosition > 10 }  )} >
<i  onClick={()=>setOpenNav(true)}  className={cn("bi bi-list-stars  text-4xl block" , {"invisible" : openNav })}></i>
<div   className={cn("flex fixed top-0 left-0 bg-white flex-col shadow-xl items-center justify-center gap-6 px-8 py-4 z-40 " , {"hidden" : !openNav} )} >
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.home} className="flex items-center mb-6" ><img src={appConfig.logoImage} className="w-8 h-8 m-4  hidden" /><H2 className="text-black" >{appConfig.name}</H2></Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.login}> <PrimaryBtn>{t("unlogedHeader.signIn")} <i className="bi bi-person"></i> </PrimaryBtn></Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.signUp}> <SecondaryBtn>{t("unlogedHeader.signUp")} <i className="bi bi-person-add"></i> </SecondaryBtn></Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.blog} > <H3 className="text-primary underline " > {t("unlogedHeader.blog")}</H3></Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.findCities} ><H3 className="text-primary underline" >{t("find city")}</H3></Link>
<i onClick={()=>setOpenNav(false)} className="bi bi-x-lg text-4xl text-red-500 hover:text-red-800"></i>
</div>
<Link href={appConfig.links.home} > <img src={appConfig.logoImage} className={cn("w-12 h-12 " , {"invisible" : openNav }) } /></Link>
    </div>
}