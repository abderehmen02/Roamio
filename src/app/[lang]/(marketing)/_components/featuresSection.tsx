"use client"

import { FeatureSectionCard } from "@/components/marketing/cards"
import { featuresSectionInfo } from "@/config/features"
import { cn } from "@/lib/tailwind"
import { PrimaryBtn } from "@/ui/buttons"
import { H2, H3, P } from "@/ui/typography"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const FeaturesSection = ()=>{
    const [selectedFeatureIndex , setSelectedFeatureIndex ] = useState<number>(0)
    const selectedFeatureInfo = featuresSectionInfo[selectedFeatureIndex]
    const router = useRouter()
    return <div className="flex gap-8 flex-col laptop:flex-row items-center justify-center  px-16 py-20 relative" >
<div  className="grid  grid-cols-2 gap-7 w-full laptop:w-2/5  "  > 
{featuresSectionInfo.map((sectionInfo , index )=><div className={cn("cursor-pointer shadow-xl bg-white rounded-2xl border-2 border-black hover:bg-whiteYellwed" , {"bg-whiteYellwed" : index === selectedFeatureIndex , "bg-white" : index !== selectedFeatureIndex })} onClick={()=>setSelectedFeatureIndex(index)}><FeatureSectionCard title={sectionInfo.shortTitle} descreption={sectionInfo.shortDescreption} iconSrc={sectionInfo.srcIcon}  /></div>)}
</div>
<div className="w-3/5   flex items-center justify-center"  >
    <div className="flex gap-7 w-[400px] flex-col" >
    <H2 className="font-semibold" >{selectedFeatureInfo.longTitle}</H2>
    <P>{selectedFeatureInfo.longDescreption}</P>
{ Boolean( typeof selectedFeatureInfo.link   && selectedFeatureInfo.linkText  ) &&  <PrimaryBtn onClick={()=>selectedFeatureInfo.link && router.push(selectedFeatureInfo.link)}  >{selectedFeatureInfo.linkText}</PrimaryBtn> }
</div>
</div>
    </div>
}