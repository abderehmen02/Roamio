import { Title } from "@/ui/title"
import { Skeleton } from "@mui/material"
import { TitleSkeleton } from "../ui/title"

export const CityCardSkeleton : React.FC = ()=>{
    return <div className="flex flex-col shadow-md  bg-white rounded-xl  w-full border-stone-600" >
    <div  className=" flex" >
    <Skeleton variant="rectangular"  style={{width : 400 , height : '100%'}} />
    <div className="flex px-6 w-full py-4 gap-3 justify-around flex-col " >
     <TitleSkeleton titleStyle={{width : 250 , height : 40 }} descreptionStyle={{width: 450 , height : 27}}  title={true} titleClassName="text-2xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark" descreption={true}  />
     <Skeleton variant="rectangular" width='95%' height='160px' />
<div className="flex items-center justify-between gap-6 py-1" ><div className="flex items-center justify-center gap-5 h-4  " >  
 <div className="flex items-center justify-center gap-1" > <Skeleton style={{width : 28 , height : 40}} />  </div>  
 <div className="flex items-center justify-center gap-1"  >   <Skeleton style={{width : 28 , height : 40}}   />       </div>  
<div  ><Skeleton style={{width : 28 , height : 40}} /></div> </div><div className="flex gap-6 justiyf-center" >  <Skeleton width={200} height={40} /><Skeleton width={200} height={40} /></div></div>
    </div>
    </div>
   </div>
}