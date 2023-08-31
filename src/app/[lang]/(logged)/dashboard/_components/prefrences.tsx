"use client"

import { useTranslation } from "@/app/i18n/client"
import { Categories, Category, Languages, Meals, Prefrence, PrefrenceObject, PrefrencesArray, PrefrencesOptions, Prices, PricesArray, Weathers, YearTimes } from "@/types/prefrences"
import { P } from "@/ui/typography"
import { useState } from "react"
import { DashboardSection } from "@/components/dashboard/containers"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "@/state/actionCreators/action"
import { CitiesQueryActionTypes } from "@/types/state/citiesQuery"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { CitiesActionTypes } from "@/types/state/cities"

const rowsFields : PrefrencesArray = [{  option : PrefrencesOptions.CATEGORIES , prefrence :  Categories }  , {   option: PrefrencesOptions.PRICES , prefrence: Prices } , { option : PrefrencesOptions.YEAR_TIMES , prefrence :  YearTimes } ,  {  option :  PrefrencesOptions.MEALS , prefrence : Meals }  , {option : PrefrencesOptions.WEATHERS , prefrence : Weathers} , {option : PrefrencesOptions.LANGUAGES , prefrence : Languages}  ]


export const PrefrenceField  : React.FC<{prefrence : PrefrenceObject  , option : PrefrencesOptions }> = ({prefrence , option })=>{
    const items = Object.values(prefrence)
    const {t}  = useTranslation()
    const queryCities = useSelector(((state : stateType) => state.citiesQuery))
    const cities = useSelector((state: stateType)=>state.cities)
    const dispatch= useDispatch()
    const { dispatchAction } = bindActionCreators(ActionCreators , dispatch)
    const [LastItem, setLastItem] = useState<number>(3)
    const {data , isLoading } = useQuery({
        queryKey : ["Cities"] , 
        queryFn: async ()=>{
          dispatchAction({type : CitiesActionTypes.LOADING_CITIES})
          const response = await axios.get("/api/getCities")
          return response.data 
        } ,
        onSuccess : (data)=>{
          dispatchAction({type : CitiesActionTypes.EDIT_CITIES ,  payload :{cities: data , error : null , loading : false}})
        } ,
        onError : (err : any)=>{
          dispatchAction({type : CitiesActionTypes.FAIL_CITIES , payload  : {message : err?.message || "Internal server error : can not get the cities"} })
        }
    })
   

const toglePrefrence = (prefrence : Prefrence ): void=>{
    if(option === PrefrencesOptions.CATEGORIES){
    let includePrefrence : boolean = queryCities.categories.value.includes(prefrence as Category ) 
    if(includePrefrence)        dispatchAction({type : CitiesQueryActionTypes.EDIT_CITIES_QUERY , payload : {...queryCities , categories : {...queryCities.categories , value : queryCities.categories.value.filter(item =>item !== prefrence )}} })
    else dispatchAction({type : CitiesQueryActionTypes.EDIT_CITIES_QUERY , payload : {...queryCities , categories : {...queryCities.categories , value : [...queryCities.categories.value ,prefrence as Category ]}} })
    }
}


    return <div className="flex-col py-3">
{

    items.slice(0 , LastItem).map((item=> <div className="flex  items-center gap-1" > <P className="  text-sm capitalize"  onClick={()=>toglePrefrence(item)} >{item}  </P> <i className="bi bi-record-circle text-xs"></i> </div>))
}    
<P className="w-full capitalize text-sm" onClick={()=>{items?.length> LastItem  && setLastItem(val=>val+ 3) , console.log("clicked") }} >{t("seeMore")}<i className="bi bi-arrow-down"></i></P>
<P className="w-full capitalize text-sm" onClick={()=>{ items?.length> 2  &&  setLastItem(val=>val  -  3) , console.log("clicked") }} >{t("seeLess")}<i className="bi bi-arrow-up"></i></P>
    </div>
}


export const PrefrencesRow : React.FC = ()=>{
    return <DashboardSection>     
{
      rowsFields.map(prefrence=><PrefrenceField prefrence={prefrence.prefrence} option={prefrence.option} />)
}     
</DashboardSection>
}