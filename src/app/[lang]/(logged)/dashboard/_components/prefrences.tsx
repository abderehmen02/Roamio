"use client"

import { useTranslation } from "@/app/i18n/client"
import { Categories, Languages, Meals, Prefrence, Prefrences, Prices, PricesArray, YearTimes } from "@/types/prefrences"
import { P } from "@/ui/typography"
import { useState } from "react"
import { DashboardSection } from "@/components/dashboard/containers"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"

const rowsFields : Prefrences = [Categories  , Prices , YearTimes , Meals  ]


export const PrefrenceField  : React.FC<{prefrence : Prefrence}> = ({prefrence})=>{
    const items = Object.keys(prefrence)
    const {t}  = useTranslation()
    const queryCities = useSelector(((state : stateType) => state.citiesQuery))
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
    rowsFields.map(prefrence=><PrefrenceField prefrence={prefrence} />)
}     
</DashboardSection>
}