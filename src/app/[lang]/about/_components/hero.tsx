"use client"

import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { H1 } from "@/ui/typography"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArticleIcon from '@mui/icons-material/Article';
import Link from "next/link";
import { appConfig } from "@/config";



export const AboutHero = ()=>{
    return <div  className="flex relative w-full items-center  justify-between  gap-20 " >
        <div className="w-4/12 flex items-start justify-center flex-col gap-9" >
            <H1 className="font-semibold " >How to Find the Best Cities for Your Travel Goals with Roamio’s Customizable Filters</H1>
            <div className="flex items-center justify-center gap-5" >
<Link href={appConfig.links.findCities} >            <PrimaryBtn   className="font-semibold" >Find Cities <FmdGoodIcon/></PrimaryBtn></Link>
<Link href={appConfig.links.blog} >            <SecondaryBtn className="font-semibold" >Explore Articles <ArticleIcon/></SecondaryBtn></Link>
            </div>
        </div>
            <img src="/planet.png " className="w-5/12 object-contain" />
        </div>
}