import { CityCardSkeleton } from "@/components/skeletons/city/cityCardSkeleton";
import React from "react";

export const LoadingCities: React.FC = ()=>{
    return  <div className="flex flex-col  items-center gap-10" >
    {new Array(20).map(()=>< CityCardSkeleton />)}
</div>
}