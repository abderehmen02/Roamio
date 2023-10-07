"use client"

import { PrimaryBtn } from "@/ui/buttons"
import { useRouter } from 'next/navigation'
import {  PrefrencesRow } from "./_components/prefrences"
import { LoggedPage, Page, PageBody } from "@/ui/containers"
import { Cities } from "./_components/cities"
import { Title } from "@/ui/title"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { InfoCard, cardsColors } from "@/components/marketing/cards"
import { appConfig } from "@/config"
import { isUserInfo } from "@/types/state/auth/userInfo"
import { userInfo } from "os"
import { H1 } from "@/ui/typography"
export default function FindCitiesPage  (){
    const cities = useSelector((state : stateType)=>state.cities)
    const userInfo  = useSelector((state : stateType)=>state.userInfo)
    const router = useRouter()   
    console.log("loading" , cities.loading , cities.cities.length ) 
    if(cities.error?.message) return <LoggedPage> <Title title="Error !" descreption={"Some error hapened on the cities state! please try again later." + cities.error.message }  /></LoggedPage>
    return <Page >
<div className=" flex items-center justify-between px-7" >
<InfoCard color={cardsColors.secondary}  button={<PrimaryBtn onClick={()=>router.push(appConfig.links.blog)} >Our Blog</PrimaryBtn>} description="Discover travel inspiration, tips, and adventure in our blog." title="Blog" />
    {    (  cities.loading ||   cities.cities.length  > 0 ) ? <Title title="Find Your Next Distination" className="w-fit" descreption="Select your prefrences and start reading about diffrent cities"  /> :   <Title className="" title="No city found" descreption="Can not find any city! please select some other prefrences "  />  }
    {
        isUserInfo(userInfo) ?<InfoCard color={cardsColors.primary} button={<PrimaryBtn onClick={()=>router.push(appConfig.links.notes)} className="hover:border-2 border-white" >  Your Notes</PrimaryBtn>} description=" Keep track of items to bring, travel notes, and more." title="Travel Notes" />  : (
<InfoCard color={cardsColors.primary} button={<PrimaryBtn onClick={()=>router.push(appConfig.links.notes)} className="hover:border-2 border-white" >  Sign Up</PrimaryBtn>} description="Start exploring the world with us. Create your account today!" title={`Join ${appConfig.name}`} />
        )

    }
</div>
<PageBody className="relative" >
<PrefrencesRow/>
<Cities/>
</PageBody>
    </Page>
}