import { appConfig } from "@/config";
import ActionCreators from "@/state/actionCreators/action";
import { stateType } from "@/state/reducers";
import { CitiesQueryActionTypes } from "@/types/state/citiesQuery";
import { PrimaryBtn } from "@/ui/buttons";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export const SeeMoreCities : React.FC = ()=>{
    const searchParams = useSearchParams()!
    const currentPage : string = searchParams.get(appConfig.pageQueryParamName) || "1"
    const router = useRouter()
    const pathname = usePathname()
    const citiesState  = useSelector((state : stateType)=>state.cities)
    const dispatch = useDispatch()
    const {dispatchAction} = bindActionCreators(ActionCreators , dispatch )

const nextPage = () : void =>{
     const urlSearchParams = new URLSearchParams(searchParams.toString() )
      urlSearchParams.set(appConfig.pageQueryParamName  , String(Number(currentPage) +  1))        
      router.push(pathname + "?" + urlSearchParams.toString() , {scroll : false} )
}


    if(citiesState.cities.length === 0  ) return <></>
    return <>
{ citiesState.loading  ? <span>loading...</span> :  <PrimaryBtn onClick={nextPage} >See More</PrimaryBtn>  }
     </>
}