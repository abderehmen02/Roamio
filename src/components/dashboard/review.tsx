import { appConfig } from "@/config"
import { authConfig } from "@/config/auth"
import { P } from "@/ui/typography"
import Image from 'next/image'
export type Review =  {
    userName? : string , 
    image?: string , 
    review?: string
}

export const ReviewComponent : React.FC<Review> = ({review , image , userName})=>{
    if(!review) return <span>skeleton</span>
    else if(review && !image && !userName) return <span>userName and image skeleton + {review}</span>
    return <div className="flex w-full px-2 items-center justify-start gap-1" >
        <Image alt="profile image" src={appConfig.unknownPersonImg } width={50}  height={50} style={{border : '1px solid black'}} className=" rounded-full" />
        <div className="flex items-center justify-center gap-1 flex-col" >
        <P>{review}</P>
        <P>{userName}</P>
        </div>
    </div>
}