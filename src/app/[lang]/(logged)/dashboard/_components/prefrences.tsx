"use client"

import { useTranslation } from "@/app/i18n/client"
import { Categories, Category, Languages, Meals, Prefrence, PrefrenceObject, PrefrencesArray, PrefrencesOptions, Price, Prices, PricesArray, Weathers, YearTimes } from "@/types/prefrences"
import { P } from "@/ui/typography"
import { useEffect, useState } from "react"
import { DashboardSection } from "@/components/dashboard/containers"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "@/state/actionCreators/action"
import { CitiesQueryActionTypes } from "@/types/state/citiesQuery"
import { Query, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { CitiesActionTypes } from "@/types/state/cities"
import { tagglePrefrenceAndGenerateQueryCitiesSearchParams,  QueryObjParams } from "@/utils/queryCities"
import { cn } from "@/lib/tailwind"
import { canNotAbstractPrefrences } from "@/state/reducers/queryCities"
import { usePathname, useSearchParams } from "next/navigation"
import { appConfig } from "@/config"
import { WindSong } from "next/font/google"
import { useRouter } from "next/navigation"
import { generateExtractDescreptionIndex } from "./cityCard"
import { roundToNearestMinutes } from "date-fns"

const rowsFields : PrefrencesArray = [{  option : PrefrencesOptions.CATEGORIES , prefrence :  Categories }  , {   option: PrefrencesOptions.PRICES , prefrence: Prices } , { option : PrefrencesOptions.YEAR_TIMES , prefrence :  YearTimes } ,  {  option :  PrefrencesOptions.MEALS , prefrence : Meals }  , {option : PrefrencesOptions.WEATHERS , prefrence : Weathers} , {option : PrefrencesOptions.LANGUAGES , prefrence : Languages}  ]






export const PrefrenceField  : React.FC<{prefrence : PrefrenceObject  , option : PrefrencesOptions }> = ({prefrence , option })=>{
    const items = Object.values(prefrence)
    const {t}  = useTranslation()
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const queryCities = useSelector(((state : stateType) => state.citiesQuery))
    const dispatch= useDispatch()
    const { dispatchAction } = bindActionCreators(ActionCreators , dispatch)
    const [LastItem, setLastItem] = useState<number>(3)
    let activePrefrence : boolean = false; 
    let currentActivePrefrences : Prefrence[] ;
    if(option === PrefrencesOptions.CATEGORIES){
     currentActivePrefrences = searchParams.get(QueryObjParams.categories) ?  JSON.parse(searchParams.get(QueryObjParams.categories) as string ) : []
    }
    // const query = generateQueryCitiesSearchParam(queryCities)










    const isPrefrenceIncluded = (item : Prefrence)=>currentActivePrefrences?.includes(item)

const toglePrefrence = (prefrence : Prefrence ): void=>{
    const selectOnePrefrenceMessage = "You should select at least one prefrence"
    if(option === PrefrencesOptions.CATEGORIES){
    const newQuery = tagglePrefrenceAndGenerateQueryCitiesSearchParams( option , prefrence , searchParams )
    router.push(`${pathname}?${newQuery}` , {scroll : false}  )
    }
    else if(option === PrefrencesOptions.PRICES){

    let includePrefrence : boolean = queryCities.price.value.includes(prefrence as Price )
    if(includePrefrence)   {  
        if(canNotAbstractPrefrences(queryCities)) return alert(selectOnePrefrenceMessage)
        dispatchAction({type : CitiesQueryActionTypes.EDIT_CITIES_QUERY , payload : {...queryCities , price: {...queryCities.price, value : queryCities.price.value.filter(item =>item !== prefrence )}} }) }
    else dispatchAction({type : CitiesQueryActionTypes.EDIT_CITIES_QUERY , payload : {...queryCities , price : {...queryCities.price, value : [...queryCities.price.value ,prefrence as Price]}} })
}
}





// useEffect(()=>{
// const params = new URLSearchParams()
// params.set(appConfig.cityQueryParamName , JSON.stringify(queryCities) )
// router.push(`${pathname}?${generate}` , {scroll : false}  )
// } , [generateQueryCitiesSearchParam(queryCities)  ] )





    return <div className="flex-col  py-3">
{

    items.slice(0 , LastItem).map((item=> <div   onClick={()=>toglePrefrence(item)} className={ cn( " cursor-pointer  capitalize flex items-center gap-1"  , {"text-black " :  isPrefrenceIncluded( item )} )} > <P className="w-32" >{item}  </P> { isPrefrenceIncluded( item ) && <i className="bi bi-record-circle text-sm"></i> } </div>))
}    
<P className=" capitalize text-sm" onClick={()=>{items?.length> LastItem  && setLastItem(val=>val+ 3) , console.log("clicked") }} >{t("seeMore")}<i className="bi bi-arrow-down"></i></P>
<P className=" capitalize text-sm" onClick={()=>{ items?.length> 2  &&  setLastItem(val=>val  -  3) , console.log("clicked") }} >{t("seeLess")}<i className="bi bi-arrow-up"></i></P>
    </div>
}


export const PrefrencesRow : React.FC = ()=>{
    const searchParams = useSearchParams()
    const queryCities = useSelector(((state : stateType) => state.citiesQuery))
    const router = useRouter()
    const citySearchQueryString =  searchParams.toString()
     const pathname = usePathname()
     const currentPage : string = searchParams.get(QueryObjParams.page) || "1"
    const dispatch= useDispatch()
    const { dispatchAction } = bindActionCreators(ActionCreators , dispatch)

    const {data , isLoading } = useQuery({
        queryKey : ["Cities" ,  citySearchQueryString ] ,
        enabled : typeof searchParams.get(QueryObjParams.categories) === "string"&& Boolean(JSON.parse(searchParams.get(QueryObjParams.categories) as string).length  ) ,
        keepPreviousData : true ,

        queryFn: async ()=>{
        dispatchAction({type : CitiesActionTypes.LOADING_CITIES})   
        console.log("city search query string"  , citySearchQueryString)
          const response = await axios.get(`/api/getCities?${citySearchQueryString}`)
          return response.data 
        } ,
        onSuccess : (data)=>{
          dispatchAction({type : CitiesActionTypes.EDIT_CITIES ,  payload :{cities: data , error : null , loading : false}}) ;
          if(  (  data.length < Number(currentPage ) * 50 ) || data.length < 50 ) {
                      const urlSearchParams = new URLSearchParams(searchParams.toString() )
                      urlSearchParams.set(QueryObjParams.page , "end" ) 
                      router.push(pathname + "?" + urlSearchParams.toString() , {scroll : false})
          }
        } ,
        onError : (err : any )=>{
            console.log("err" , err)
          dispatchAction({type : CitiesActionTypes.FAIL_CITIES , payload  : {message : err?.message || "Internal server error : can not get the cities"} })
        }
    })


    useEffect(()=>{
        const urlSearchParams = new URLSearchParams(searchParams.toString())
        const paramsCategories = typeof urlSearchParams.get(QueryObjParams.categories) === "string" ?  JSON.parse(urlSearchParams.get(QueryObjParams.categories) as string ) : []
        if(paramsCategories.length === 0) paramsCategories.push(Categories.MostVisited)
        urlSearchParams.set(QueryObjParams.categories , JSON.stringify(paramsCategories))
        router.push( pathname + "?" +  urlSearchParams.toString())
    }, [])
    

    return <DashboardSection className="bg-white  text-primary border-none shadow-md h-fit" >     
{
      rowsFields.map(prefrence=><PrefrenceField prefrence={prefrence.prefrence} option={prefrence.option} />)
}     
</DashboardSection>
}