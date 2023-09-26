"use client"

import { stateType } from "@/state/reducers"
import { CitiesState } from "@/types/state/cities"
import { H2 } from "@/ui/typography"
import { useState } from "react"
import { useSelector } from "react-redux"
import { CityCard } from "./cityCard"
import { SeeMoreCities } from "./seeMoreCitiesBtn"
import { LoadingCities } from "./loadingCities"
import { useSearchParams } from "next/navigation"
import { QueryObjParams } from "@/utils/queryCities"

export const Cities = ()=>{
    const searchParams = useSearchParams()
    const cities : CitiesState = useSelector((state : stateType)=>state.cities)
    if(cities.loading && cities.cities.length === 0 ) return <LoadingCities/>
    if(cities.error) return <H2>{cities.error.message}</H2>

    return <div className="flex flex-col  items-center gap-10" >
         {cities.cities.map((city)=><CityCard key={city.name} {...city} />)}
        <SeeMoreCities/>
    </div>
}