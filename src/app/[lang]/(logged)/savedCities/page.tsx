"use client"
import { LoggedPage, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";
import { Cities } from "../dashboard/_components/cities";
import { SavedCities } from "./_components/savedCities";
import { useSelector } from "react-redux";
import { stateType } from "@/state/reducers";
import { isUserInfo } from "@/types/state/auth/userInfo";
import { H3 } from "@/ui/typography";
import Link from "next/link";
import { PrimaryBtn } from "@/ui/buttons";


export default function SavedCitiesPage (){
const userInfo = useSelector((state : stateType)=>state.userInfo)
if(!isUserInfo(userInfo)) return <H3>it seems that you are not logged in! please log in and try again</H3>

    return <LoggedPage>
{ userInfo.savedCities?.length ?         <Title title="Your Cities" descreption="Your Collection of Treasured Destinations." /> :   <div className="w-full flex flex-col items-center justify-center gap-5" ><Title title="No city found" descreption="You did not saved any city yet " />
    <Link href="/dashboard" ><PrimaryBtn>Explore Cities</PrimaryBtn></Link>
    </div> }
     <PageBody className="w-full justify-center  " >   <SavedCities/></PageBody>
    </LoggedPage>
}