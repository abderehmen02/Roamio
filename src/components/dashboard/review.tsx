import { P } from "@/ui/typography"

export type Review =  {
    userName? : string , 
    image?: string , 
    review?: string
}

export const ReviewComponent : React.FC<Review> = ({review , image , userName})=>{
    if(!review) return <span>skeleton</span>
    else if(review && !image && !userName) return <span>userName and image skeleton + {review}</span>
    return <div>
        <img src={image} />
        <P>{review}</P>
        <P>{userName}</P>
    </div>
}