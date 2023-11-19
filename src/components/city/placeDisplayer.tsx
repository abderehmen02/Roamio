import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import { H3 } from "@/ui/typography"

export const PlaceDisplayer : React.FC<{placeName   : string}> = ({placeName})=>{
    const placeWikipediaData = usePlaceWikipediaData(placeName)
    return <div className="flex items-center justify-center ">
                <img src={placeWikipediaData.image} />
        <div className="flex flex-col" >
        <H3>        {placeWikipediaData.title}</H3>
        <p>{placeWikipediaData.descreption}</p>
        </div>
    </div>
}