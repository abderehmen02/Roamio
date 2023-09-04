import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import React from "react"


export const LandmarkCard : React.FC<{landMark : string}> =({landMark})=>{
    const {descreption , error , image , imageAspectRacio , infoAvailble , lat , loading , lon , subtitle } = usePlaceWikipediaData(landMark)
return <div>
    landmark...
</div>
}