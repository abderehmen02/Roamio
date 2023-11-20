import { usePlaceWikipediaData } from "@/hooks/cityWikipediaData"
import { cn } from "@/lib/tailwind"
import { Title } from "@/ui/title"
import { H3, P } from "@/ui/typography"

export const PlaceDisplayer : React.FC<{placeName   : string}> = ({placeName})=>{
    const placeWikipediaData = usePlaceWikipediaData(placeName)
      return <div  className="flex w-full flex-col shadow-md  relative bg-white rounded-xl  border-stone-600" >
     <div  className="flex-col laptop:flex-row flex" >
     <img  src={placeWikipediaData.image}  style={{ minHeight: '200px' , objectFit: 'cover' ,  }} className={ cn( "w-full laptop:w-[300px] rounded-l-xl border-2 h-full" )} />
     <div className="flex px-6 w-full py-1 justify-around flex-col " >
      <Title  title={placeWikipediaData.title}  titleClassName="  text-2xl" className="laptop:flex-row items-start   laptop:items-center  justify-start  w-fit laptop:gap-7"  descreptionClassName="font-bold text-secondaryDark  text-start" descreption={placeWikipediaData.subtitle}  />
       { placeWikipediaData.descreption &&  <P style={{maxWidth : '100%'}} className="text-sm block max-w-full break-words" >{placeWikipediaData.descreption}</P> }
 
     </div>
     </div>
    </div>
}