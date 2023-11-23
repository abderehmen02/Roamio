import { CityCardSkeleton } from "@/components/skeletons/city/cityCardSkeleton";
import React from "react";

export const LoadingCities: React.FC = ()=>{

    return  <div className="flex flex-col justify-center   w-full  items-center gap-10" >
        {new Array(10).fill(undefined).map((Item , index )=><CityCardSkeleton key={index} />)  }
        </div>
}