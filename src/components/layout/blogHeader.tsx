"use client"
import { appConfig } from "@/config"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import Link from "next/link"
import { useTranslation as translate } from "@/app/i18n"
import { H2, H3 } from "@/ui/typography"
import { useEffect, useState } from "react"
import { cn } from "@/lib/tailwind"
import HomeIcon from '@mui/icons-material/Home';







export const BLogHeader =   ()=>{
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

    return      <>
    <div  className="hidden   laptop:flex w-full px-12  items-center justify-between py-2" >
<Link href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-16 h-16" /></Link>
<Link href={appConfig.links.home}> <PrimaryBtn>Back To Home </PrimaryBtn></Link>
    </div>
    <div className="flex  w-full laptop:hidden" >
    <div  className={cn("flex px-5 py-2 w-full z-30 items-center fixed   top-0 justify-between" , {"bg-white" : scrollPosition >10} )}  >
<Link href={appConfig.links.home} > <img src={appConfig.logoImage} className="w-12 h-12"  /></Link>
<HomeIcon sx={{fontSize : "40px"}} />   </div>
    </div>
    </>
}