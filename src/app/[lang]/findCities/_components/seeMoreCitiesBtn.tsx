import { appConfig } from "@/config";
import ActionCreators from "@/state/actionCreators/action";
import { stateType } from "@/state/reducers";
import { CitiesQueryActionTypes } from "@/types/state/citiesQuery";
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons";
import { QueryObjParams } from "@/utils/queryCities";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export const SeeMoreCities : React.FC = ()=>{
    const searchParams = useSearchParams()!
    const currentPage : string = searchParams.get(QueryObjParams.page) || "1"
    const router = useRouter()
    const pathname = usePathname()
    const citiesState  = useSelector((state : stateType)=>state.cities)
    const dispatch = useDispatch()
    const {dispatchAction} = bindActionCreators(ActionCreators , dispatch )

const nextPage = () : void =>{
     const urlSearchParams = new URLSearchParams(searchParams.toString() )
      urlSearchParams.set(QueryObjParams.page, String(Number(currentPage) +  1))        
      router.push(pathname + "?" + urlSearchParams.toString() )
}


const prevPage = () : void =>{
    if(Number(currentPage) < 2) return 
    const urlSearchParams = new URLSearchParams(searchParams.toString() )
     urlSearchParams.set(QueryObjParams.page, String(Number(currentPage) -  1))        
     router.push(pathname + "?" + urlSearchParams.toString()  )
}


    if(citiesState.cities.length === 0 ) return <></>
    return <div className="w-full" >
{ citiesState.loading  ? <span>loading...</span> : <div className="flex w-full justify-between items-center" >
     <SecondaryBtn onClick={prevPage} >Previous <i className="bi mx-3 text-2xl bi-arrow-left-circle-fill"></i> </SecondaryBtn>
     <PrimaryBtn onClick={nextPage} >Next <i className="bi text-2xl mx-3 bi-arrow-right-circle-fill"></i> </PrimaryBtn>  
     </div> }
     </div>
}