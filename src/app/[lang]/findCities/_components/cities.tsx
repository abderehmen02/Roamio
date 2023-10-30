"use client"

import { stateType } from "@/state/reducers"
import { CitiesState } from "@/types/state/cities"
import { H2 } from "@/ui/typography"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { CityCard } from "./cityCard"
import { SeeMoreCities } from "./seeMoreCitiesBtn"
import { LoadingCities } from "./loadingCities"
import { useSearchParams } from "next/navigation"
import { QueryObjParams } from "@/utils/queryCities"
import { TextButton } from "@/ui/buttons"
import { Hints, Steps   } from 'intro.js-react'
import "intro.js/introjs.css";




export const Cities : React.FC<{prefrencesModal : boolean , setPrefrencesModal : Dispatch<SetStateAction<boolean>>
}> = ({prefrencesModal , setPrefrencesModal })=>{
const [stepsEnabled , setStepsEnabled ] = useState(true)

    const OnboardingInfo = {
        stepsEnabled,
          initialStep: 0,
          steps: [
            {
              element: ".selectPrefrencesBtn ",
              intro: "Select your target prefrences by clicking on this button to see cities according to your selected prefrences",
              nextLabel: "next in"
            } 
           ],
        hintsEnabled: true,
    }
    


    const cities : CitiesState = useSelector((state : stateType)=>state.cities)
    if(cities.loading && !cities.cities.length ) return <div  className="flex pt-10 largeMonitor:pt-0 flex-col relative w-full  z-0 largeMonitor:w-[85%] items-center gap-10 " >
    <TextButton className="largeMonitor:hidden selectPrefrencesBtn" onClick={()=>setPrefrencesModal(true)} >Select Prefrences</TextButton>
    <LoadingCities/>
</div>
    if(cities.error) return <H2>{cities.error.message}</H2>

    return <div  className="flex pt-10   largeMonitor:pt-0 flex-col relative w-full   largeMonitor:w-[85%] items-center gap-10 " >
         <Steps options={{doneLabel : "Done"}} enabled={stepsEnabled} onExit={()=>setStepsEnabled(false)} initialStep={0}  steps={OnboardingInfo.steps} />
        <TextButton   className=" largeMonitor:hidden  selectPrefrencesBtn" onClick={()=>setPrefrencesModal(true)} >Select Prefrences</TextButton>
         {cities.cities.map((city)=><CityCard key={city.name} {...city} />)}
        <SeeMoreCities/>
    </div>
}