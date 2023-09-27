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
import {  useQuery } from "@tanstack/react-query"
import axios from "axios"
import { CitiesActionTypes } from "@/types/state/cities"
import { tagglePrefrenceAndGenerateQueryCitiesSearchParams,  QueryObjParams } from "@/utils/queryCities"
import { cn } from "@/lib/tailwind"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

const rowsFields : PrefrencesArray = [{  option : PrefrencesOptions.CATEGORIES , prefrence :  Categories }  , {   option: PrefrencesOptions.PRICES , prefrence: Prices } , { option : PrefrencesOptions.YEAR_TIMES , prefrence :  YearTimes } ,  {  option :  PrefrencesOptions.MEALS , prefrence : Meals }  , {option : PrefrencesOptions.WEATHERS , prefrence : Weathers} , {option : PrefrencesOptions.LANGUAGES , prefrence : Languages}  ]

export const PrefrenceField  : React.FC<{prefrence : PrefrenceObject  , option : PrefrencesOptions }> = ({prefrence , option })=>{
    const items = Object.values(prefrence)
    const {t}  = useTranslation()
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let initialLastItem = 3 ;

    let currentActivePrefrences : Prefrence[] ;
    if(option === PrefrencesOptions.CATEGORIES){
    initialLastItem = 15
     currentActivePrefrences = searchParams.get(QueryObjParams.categories) ?  JSON.parse(searchParams.get(QueryObjParams.categories) as string ) : []
    }
    else if(option === PrefrencesOptions.PRICES){
        initialLastItem = 4
        currentActivePrefrences = searchParams.get(QueryObjParams.price) ?  JSON.parse(searchParams.get(QueryObjParams.price) as string ) : []
    }
    else if(option === PrefrencesOptions.LANGUAGES){
   
        currentActivePrefrences = JSON.parse(searchParams.get(QueryObjParams.languages) || "[]" )
    }
    else if(option === PrefrencesOptions.WEATHERS){
        initialLastItem = 7
        currentActivePrefrences = JSON.parse(searchParams.get(QueryObjParams.weathers)|| "[]")
    }
    const [LastItem, setLastItem] = useState<number>(option === PrefrencesOptions.CATEGORIES ? 15 :3)


    const isPrefrenceIncluded = (item : Prefrence)=>currentActivePrefrences?.includes(item)

const toglePrefrence = (prefrence : Prefrence ): void=>{
    const newQuery = tagglePrefrenceAndGenerateQueryCitiesSearchParams( option , prefrence , searchParams )
    router.push(`${pathname}?${newQuery}` , {scroll : false}  )
}










    return <div className="flex-col w-full py-3">
{

    items.slice(0 , LastItem).map((item=> <div   onClick={()=>toglePrefrence(item)} className={ cn( " cursor-pointer  capitalize flex items-center gap-1"  , {"text-black " :  isPrefrenceIncluded( item )} )} > <P  >{item}  </P> { isPrefrenceIncluded( item ) && <i className="bi bi-record-circle text-sm"></i> } </div>))
}    
<P className=" capitalize cursor-pointer text-sm" onClick={()=>{items?.length> LastItem  && setLastItem(val=>val+ 3)  }} >{t("seeMore")}<i className="bi bi-arrow-down"></i></P>
<P className=" capitalize cursor-pointer text-sm" onClick={()=>{ items?.length> 2  &&  setLastItem(val=>val  -  3) }} >{t("seeLess")}<i className="bi bi-arrow-up"></i></P>
    </div>
}


export const PrefrencesRow : React.FC = ()=>{
    const searchParams = useSearchParams()
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
    

    return <DashboardSection  className="bg-white sticky pl-5  top-6 scrollPrefrences  text-primary border-none shadow-md h-fit" >     
{
      rowsFields.map(prefrence=><PrefrenceField prefrence={prefrence.prefrence} option={prefrence.option} />)
}     
</DashboardSection>
}