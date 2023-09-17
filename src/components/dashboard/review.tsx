import { appConfig } from "@/config"
import { P } from "@/ui/typography"
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';
export type Review =  {
    userName? : string , 
    image?: string , 
    review?: string ,
    deleteReviewFn: (reviewId : string)=>any , 
    _id?: string 
}

export const ReviewComponent : React.FC<Review> = ({review , _id , image , userName , deleteReviewFn  })=>{
    if(!review) return <span>skeleton</span>
    else if(review && !image && !userName) return <span>userName and image skeleton + {review}</span>
    return <div className="flex px-4 w-full justify-between" >
    <div className="flex w-full px-2  items-center justify-start gap-2" >
        <img alt="profile image" src={ image || appConfig.unknownPersonImg } width={35}  height={35} style={{border : '1px solid black'}} className=" rounded-full" />
        <div className="flex items-start  flex-col" >
        <P className="text-start text-sm font-extrabold " >{userName}</P>
        <P className="text-start text-sm" >{review}</P>
        </div>
    </div>
    <DeleteIcon  className="cursor-pointer" onClick={()=>{if(_id)deleteReviewFn(_id)}} />
    </div>
}