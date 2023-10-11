"use client"
import { stateType } from "@/state/reducers";
import { isUserInfo } from "@/types/state/auth/userInfo";
import { H3 } from "@/ui/typography";
import React from "react";
import { useSelector } from "react-redux";
import { Title } from "@/ui/title";
import Link from "next/link";
import { PrimaryBtn } from "@/ui/buttons";
import { CityCard } from "@/app/[lang]/findCities/_components/cityCard";

export const SavedCities : React.FC = ()=>{
    const userInfo = useSelector((state : stateType)=>state.userInfo)
    if(!isUserInfo(userInfo)) return <H3>It seems that you are not loged in. Please login and try again later</H3>
  
    return <div className="flex flex-col gap-5  " >
{
    userInfo.savedCities.map(city=><CityCard name={city} />)
}
    </div>
}