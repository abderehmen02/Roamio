"use client"

import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { H1 } from "@/ui/typography"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArticleIcon from '@mui/icons-material/Article';
import Link from "next/link";
import { appConfig } from "@/config";



export const AboutHero = ()=>{
    return <div  className="flex py-7 laptop:py-0 flex-col laptop:flex-row relative w-full items-center  justify-between  gap-4 laptop:gap-20 " >
        <div className="w-full laptop:w-4/12 flex items-start justify-center flex-col gap-9" >
            <H1 className="laptop:font-semibold " >How to Find the Best Cities for Your Travel Goals with Roamio’s Customizable Filters</H1>
            <div className="flex flex-col laptop:flex-row  items-center justify-center gap-5" >
<Link href={appConfig.links.findCities} >            <PrimaryBtn   className="w-[250px] laptop:w-fit font-semibold" >Find Cities <FmdGoodIcon/></PrimaryBtn></Link>
<Link href={appConfig.links.blog} >            <SecondaryBtn className="w-[250px] laptop:w-fit font-semibold" >Explore Articles <ArticleIcon/></SecondaryBtn></Link>
            </div>
        </div>
            <img alt="planet image" src="/planet.png " className="w-full laptop:w-5/12 object-contain" />
        </div>
}