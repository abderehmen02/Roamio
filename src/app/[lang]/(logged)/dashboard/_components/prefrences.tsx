"use client"

import { useTranslation } from "@/app/i18n/client"
import { Categories, Languages, Meals, Prefrence, Prefrences, PrefrencesOptions, Prices, PricesArray, Weathers, YearTimes } from "@/types/prefrences"
import { P } from "@/ui/typography"
import { useState } from "react"
import { DashboardSection } from "@/components/dashboard/containers"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "@/state/actionCreators/action"

const rowsFields : Prefrences = [{  option : PrefrencesOptions.CATEGORIES , prefrence :  Categories }  , {   option: PrefrencesOptions.PRICES , prefrence: Prices } , { option : PrefrencesOptions.YEAR_TIMES , prefrence :  YearTimes } ,  {  option :  PrefrencesOptions.MEALS , prefrence : Meals }  , {option : PrefrencesOptions.WEATHERS , prefrence : Weathers} , {option : PrefrencesOptions.LANGUAGES , prefrence : Languages}  ]


export const PrefrenceField  : React.FC<{prefrence : Prefrence  , option : PrefrencesOptions }> = ({prefrence , option })=>{
    const items = Object.keys(prefrence)
    const {t}  = useTranslation()
    const queryCities = useSelector(((state : stateType) => state.citiesQuery))
    const dispatch= useDispatch()
    const { dispatchAction } = bindActionCreators(ActionCreators , dispatch)
    const [LastItem, setLastItem] = useState<number>(3)
    return <div className="flex-col py-3">
{
    items.slice(0 , LastItem).map((item=> <div className="flex  items-center gap-1" > <P className="  text-sm capitalize" >{item}  </P> <i className="bi bi-record-circle text-xs"></i> </div>))
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