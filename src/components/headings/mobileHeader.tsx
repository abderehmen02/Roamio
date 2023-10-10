"use client"

import { useTranslation } from "@/app/i18n/client"
import { appConfig } from "@/config"
import { cn } from "@/lib/tailwind"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { H3 } from "@/ui/typography"
import Link from "next/link"
import { useState } from "react"



export const UnlogedMobileHeader = ()=>{
    const {t} = useTranslation()
    const [openNav , setOpenNav]= useState<boolean>(false)
    return <div className="flex  flex-col" >
<i  className={cn("bi bi-list-stars m-5 text-4xl block" , {"hidden" : openNav })}></i>
<div className={cn("flex fixed top-0 left-0 " , {"hidden" : !openNav} )} >
<Link href={appConfig.links.home} ><img src={appConfig.logoImage} className="w-16 h-16" /></Link>
<Link href={appConfig.links.blog} > <H3 className="text-primary " > {t("unlogedHeader.blog")}</H3></Link>
<Link href={appConfig.links.findCities} ><H3 className="text-primary" >{t("find city")}</H3></Link>
<Link href={appConfig.links.login}> <PrimaryBtn>{t("unlogedHeader.signIn")} <i className="bi bi-person"></i> </PrimaryBtn></Link>
<Link href={appConfig.links.signUp}> <SecondaryBtn>{t("unlogedHeader.signUp")} <i className="bi bi-person-add"></i> </SecondaryBtn></Link>
</div>
    </div>
}