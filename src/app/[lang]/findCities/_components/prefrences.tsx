"use client"
import { useTranslation } from "@/app/i18n/client"
import { Categories, Category, Languages, Meals, Prefrence, PrefrenceObject, PrefrencesArray, PrefrencesOptions, Price, Prices, PricesArray, Weathers, YearTimes } from "@/types/prefrences"
import { P } from "@/ui/typography"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
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
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Box, Modal } from "@mui/material"
import { Title } from "@/ui/title"

const rowsFields : PrefrencesArray = [{  option : PrefrencesOptions.CATEGORIES , prefrence :  Categories }  , {   option: PrefrencesOptions.PRICES , prefrence: Prices } , { option : PrefrencesOptions.YEAR_TIMES , prefrence :  YearTimes } ,  {  option :  PrefrencesOptions.MEALS , prefrence : Meals }  , {option : PrefrencesOptions.WEATHERS , prefrence : Weathers} , {option : PrefrencesOptions.LANGUAGES , prefrence : Languages}  ]


const prefrencesModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    display : "flex" , 
    alignItems : 'center' ,
    justifyContent : 'center' ,
    flexDirection : 'column' ,
    gap : '16px' ,
    left: '50%',
    maxHeight : '90vh' ,
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

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










    return <div className="flex-col w-full  py-3">
{

    items.slice(0 , LastItem).map((item=> <div   onClick={()=>toglePrefrence(item)} className={ cn( " cursor-pointer  capitalize flex items-center gap-1"  , {"text-black " :  isPrefrenceIncluded( item )} )} > <P  >{item}  </P>{isPrefrenceIncluded(item) && <RadioButtonCheckedIcon style={{fontSize : '13px'}} />} </div>))
}    
{ items.length > LastItem &&  <P className=" capitalize cursor-pointer text-sm" onClick={()=>{items?.length> LastItem  && setLastItem(val=>val+ 3)  }} >{t("seeMore")}<i className="bi bi-arrow-down"></i></P> }
{ LastItem > 3 && <P className=" capitalize cursor-pointer text-sm" onClick={()=>{ LastItem> 2  &&  setLastItem(val=>val  -  3) }} >{t("seeLess")}<i className="bi bi-arrow-up"></i></P>}
    </div>
}


export const PrefrencesRow : React.FC <{prefrencesModal : boolean , setPrefrencesModal  : Dispatch<SetStateAction<boolean>>
}>= ({prefrencesModal , setPrefrencesModal })=>{
    const searchParams = useSearchParams()
    const router = useRouter()
    const citySearchQueryString =  searchParams.toString()
     const pathname = usePathname()
     const currentPage : string = searchParams.get(QueryObjParams.page) || "1"
    const dispatch= useDispatch()
    const { dispatchAction } = bindActionCreators(ActionCreators , dispatch)
    const [showPrefrences, setshowPrefrences] = useState(false)



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
    

    const scrollY =( typeof window !== "undefined" && window.scrollY) ||0


    return <>
<Modal open={prefrencesModal} onClose={()=>setPrefrencesModal(false)} >
<Box sx={prefrencesModalStyle}  >
<Title title="Prefrences" descreption="select your target prefrences" />
<div style={{width: "200px"}} className=" z-10 left-0   bg-green-500  pl-5 py-2   scrollPrefrences  text-primary border-none h-fit" >
{
      rowsFields.map(prefrence=><PrefrenceField prefrence={prefrence.prefrence} option={prefrence.option} />)
}     
</div>
</Box>
</Modal>
<div className="sticky hidden largeMonitor:block top-9 w-full z-10 left-0   bg-green-500  pl-5 py-2   scrollPrefrences  text-primary border-none  shadow-md h-fit" >
{
      rowsFields.map(prefrence=><PrefrenceField prefrence={prefrence.prefrence} option={prefrence.option} />)
}     

</div>
</>

}