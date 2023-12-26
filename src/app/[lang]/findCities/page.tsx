"use client"

import { PrimaryBtn } from "@/ui/buttons"
import { useRouter } from 'next/navigation'
import {  PrefrencesRow } from "./_components/prefrences"
import { LoggedPage, Page } from "@/ui/containers"
import { Cities } from "./_components/cities"
import { Title } from "@/ui/title"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { InfoCard, cardsColors } from "@/components/marketing/cards"
import { appConfig } from "@/config"
import { isUserInfo } from "@/types/state/auth/userInfo"
import { useState } from "react"


export default function FindCitiesPage  (){
    const cities = useSelector((state : stateType)=>state.cities)
    const userInfo  = useSelector((state : stateType)=>state.userInfo)
    const [prefrencesModal, setPrefrencesModal] = useState<boolean>(false)
    const router = useRouter()   
    if(cities.error?.message) return <LoggedPage> <Title title="Error !" descreption={"Some error hapened on the cities state! please try again later." + cities.error.message }  /></LoggedPage>
    return <Page style={{maxWidth :"1500px"}}  >
<div className="hidden max-w-full laptop:flex  items-center gap-4 justify-between px-7" >
<InfoCard color={cardsColors.secondary}  button={<PrimaryBtn onClick={()=>router.push(appConfig.links.blog)} >Our Blog</PrimaryBtn>} description="Discover travel inspiration, tips, and adventure in our blog." title="Blog" />
    {    (  cities.loading ||   cities.cities.length  > 0 ) ? <Title title="Find Your Next Distination" titleClassName="text-primaryDark" className="w-fit" descreption="Select your prefrences and start reading about diffrent cities"  /> :   <Title  titleClassName="text-primaryDark"  title="No city found" descreption="Can not find any city! please select some other prefrences "  />  }
    {
        isUserInfo(userInfo) ?<InfoCard color={cardsColors.primary} button={<PrimaryBtn onClick={()=>router.push(appConfig.links.savedCities)} className="hover:border-2 border-white" > Saved Cities</PrimaryBtn>} description="Explore and save your prefered cities " title="Save Your Cities" />  : (
<InfoCard color={cardsColors.primary} button={<PrimaryBtn onClick={()=>router.push(appConfig.links.notes)} className="hover:border-2 border-white" >  Sign Up</PrimaryBtn>} description="Start exploring the world with us. Create your account today!" title={`Join ${appConfig.name}`} />
        )

    }
</div>
<div className="relative   w-full flex gap-5 px-0" >
<PrefrencesRow prefrencesModal={prefrencesModal} setPrefrencesModal={setPrefrencesModal} />
<Cities  prefrencesModal={prefrencesModal} setPrefrencesModal={setPrefrencesModal} />
</div>
    </Page>
}