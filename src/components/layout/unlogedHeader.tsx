"use client"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { IconInput } from "@/ui/input"
import {  H2, H3, H4 } from "@/ui/typography"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useTranslation as translate } from "@/app/i18n"
import { appConfig } from "@/config"
import { UnlogedMobileHeader } from "../headings/mobileHeader"
import { useEffect, useState } from "react"
import { useTranslation } from "@/app/i18n/client"
import { cn } from "@/lib/tailwind"






export   function  FirstUnlogedHeader  (){
    const {t} = useTranslation()
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
    typeof window !== "undefined" &&        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
    typeof window !== "undefined" &&        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(<>
        <div style={{zIndex : 50}} className={cn("hidden py-5  laptop:flex w-full fixed top-0 left-0 laptop:px-7  items-center justify-between px-1 " , {"bg-black text-white"  : typeof window !== "undefined" && 100 < scrollPosition } )} >
<div className="flex items-center justify-center gap-16 " >
<Link className="flex items-center gap-" href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-11 h-11 m-4 " /> < H2 className="font-bold" >Roamio</H2> </Link>
<div className="flex items-center gap-8" >
<Link href={appConfig.links.blog} > <H3  className="capitalize  font-semibold text-xl" > {t("unlogedHeader.blog")}</H3></Link>
<Link href={appConfig.links.findCities} ><H3  className="capitalize  font-semibold text-xl" >{t("find city")}</H3></Link>
<Link href={appConfig.links.about} ><H3  className=" font-semibold " >About</H3></Link>
</div>
</div>
<div className="flex items-center gap-8" >
<Link href={appConfig.links.login}  className="capitalize  monsterrat font-semibold tracking-widest" > {t("unlogedHeader.signIn")} <i className="bi text-xl bi-person-fill"></i> </Link>
<Link href={appConfig.links.signUp}> <SecondaryBtn className="text-xl capitalize gap-1 text-black font-semibold flex items-center justify-center" >Sign Up<i className="bi  bi-person-add"></i> </SecondaryBtn></Link>
</div>        </div>
        <div className="flex w-full laptop:hidden" >
            <UnlogedMobileHeader/>
        </div>
        </>
    )
}



export   function  UnlogedHeader  (){
    const {t} = useTranslation()
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
    typeof window !== "undefined" &&        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
    typeof window !== "undefined" &&        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(<>
        <div style={{zIndex : 50}} className={cn("hidden py-5  laptop:flex w-full fixed top-0 left-0 laptop:px-7  items-center justify-between px-1 " , {"bg-black text-white"  : typeof window !== "undefined" && 10 < scrollPosition } )} >
<div className="flex items-center justify-center gap-16 " >
<Link className="flex items-center gap-4" href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-11 h-11 " /> < H2 className="font-bold" >Roamio</H2> </Link>
<div className="flex items-center gap-8" >
<Link href={appConfig.links.blog} > <H3  className="capitalize  font-semibold text-xl" > {t("unlogedHeader.blog")}</H3></Link>
<Link href={appConfig.links.findCities} ><H3  className="capitalize  font-semibold text-xl" >{t("find city")}</H3></Link>
<Link href={appConfig.links.about} ><H3  className=" font-semibold " >About</H3></Link>
</div>
</div>
<div className="flex items-center gap-8" >
<Link href={appConfig.links.login}  className="capitalize  monsterrat font-semibold tracking-widest" > {t("unlogedHeader.signIn")} <i className="bi text-xl bi-person-fill"></i> </Link>
<Link href={appConfig.links.signUp}> <SecondaryBtn className="text-xl capitalize gap-1 text-black font-semibold flex items-center justify-center" >Sign Up<i className="bi  bi-person-add"></i> </SecondaryBtn></Link>
</div>        </div>
        <div className="flex w-full laptop:hidden" >
            <UnlogedMobileHeader/>
        </div>
        </>
    )
}