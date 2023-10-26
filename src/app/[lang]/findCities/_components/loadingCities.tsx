import { CityCardSkeleton } from "@/components/skeletons/city/cityCardSkeleton";
import React from "react";

export const LoadingCities: React.FC = ()=>{
    console.log("loading cities component")

    return  <div className="flex flex-col justify-center bg-secondary  w-full  items-center gap-10" >
        {new Array(10).fill(undefined).map(()=><CityCardSkeleton/>)  }
        </div>
}