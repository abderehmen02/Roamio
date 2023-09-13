"use client"

import { stateType } from "@/state/reducers"
import { CitiesState } from "@/types/state/cities"
import { H2 } from "@/ui/typography"
import { useState } from "react"
import { useSelector } from "react-redux"
import { CityCard } from "./cityCard"
import { SeeMoreCities } from "./seeMoreCitiesBtn"

export const Cities = ()=>{
    const cities : CitiesState = useSelector((state : stateType)=>state.cities)
    console.log("cities length" , cities.cities.length )
    if(cities.loading && cities.cities.length === 0 ) return <H2>Loading</H2>
    if(cities.error) return <H2>{cities.error.message}</H2>

    return <div className="flex flex-col  items-center gap-10" >
        {cities.cities.map((city)=><CityCard {...city} />)}
        <SeeMoreCities/>
    </div>
}