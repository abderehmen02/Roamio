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
<div   className={cn("flex fixed top-0 left-0 bg-white flex-col shadow-xl  justify-center gap-6 px-8 py-4 z-40 " , {"hidden" : !openNav} )} >
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.home} className="flex gap-2  mb-3 flex-col" ><img src={appConfig.logoImage} className="w-8 h-8 m-4  hidden" />
<img src={appConfig.logoImage} className="w-[50px] h-[50px]" />
<H2 className="text-black" >{appConfig.name}</H2>
</Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.login}><H3 className="text-black capitalize font-semibold " > {t("unlogedHeader.signIn")} <i className="bi bi-person"></i></H3> </Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.signUp}><H3  className="text-black capitalize font-semibold " > {t("unlogedHeader.signUp")} <i className="bi bi-person-add"></i> </H3></Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.blog} > <H3  className="text-black capitalize font-semibold " > {t("unlogedHeader.blog")} <i className="bi bi-newspaper"></i> </H3></Link>
<Link onClick={()=>setOpenNav(false)} href={appConfig.links.findCities} ><H3  className="text-black capitalize font-semibold " >{t("find city")}<i className="bi mx-1 bi-globe-asia-australia"></i></H3></Link>
<div className="flex w-full justify-center"><i onClick={()=>setOpenNav(false)} className="bi bi-x-lg text-4xl text-red-500 hover:text-red-800"></i></div>
</div>
<Link href={appConfig.links.home} > <img src={appConfig.logoImage} className={cn("w-12 h-12 " , {"invisible" : openNav }) } /></Link>
    </div>
}