import { H3, P } from "@/ui/typography"

interface CardProps {
    title : string , 
    description : string ,
    button : JSX.Element
}

export const InfoCard : React.FC<CardProps> = ({ title , description  , button  })=>{
    return <div className="bg-primary px-3 py-6 flex flex-col " >
<H3>{title}</H3>
<P>{description}</P>
{button}
    </div>
}