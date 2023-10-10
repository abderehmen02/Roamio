"use client"

import { stateType } from "@/state/reducers"
import { CitiesState } from "@/types/state/cities"
import { H2 } from "@/ui/typography"
import React, { Dispatch, SetStateAction, useState } from "react"
import { useSelector } from "react-redux"
import { CityCard } from "./cityCard"
import { SeeMoreCities } from "./seeMoreCitiesBtn"
import { LoadingCities } from "./loadingCities"
import { useSearchParams } from "next/navigation"
import { QueryObjParams } from "@/utils/queryCities"
import { TextButton } from "@/ui/buttons"

export const Cities : React.FC<{prefrencesModal : boolean , setPrefrencesModal : Dispatch<SetStateAction<boolean>>
}> = ({prefrencesModal , setPrefrencesModal })=>{
    const searchParams = useSearchParams()
    const cities : CitiesState = useSelector((state : stateType)=>state.cities)
    if(cities.loading && cities.cities.length === 0 ) return <LoadingCities/>
    if(cities.error) return <H2>{cities.error.message}</H2>

    return <div  className="flex pt-10 flex-col w-full  z-0 largeMonitor:w-[85%] items-center gap-10 bg-green-400" >
        <TextButton  onClick={()=>setPrefrencesModal(true)} >Select Prefrences</TextButton>
         {cities.cities.map((city)=><CityCard key={city.name} {...city} />)}
        <SeeMoreCities/>
    </div>
}