"use client"

import { stateType } from "@/state/reducers"
import { CitiesState } from "@/types/state/cities"
import { H2 } from "@/ui/typography"
import { useState } from "react"
import { useSelector } from "react-redux"
import { CityCard } from "./cityCard"

export const Cities = ()=>{
    const cities : CitiesState = useSelector((state : stateType)=>state.cities)
    console.log("cities state" , cities)
    if(cities.loading) return <H2>Loading</H2>
    if(cities.error) return <H2>{cities.error.message}</H2>
    return <div className="flex flex-col  items-center gap-10" >
        {cities.cities.map((city)=><CityCard {...city} />)}
    </div>
}