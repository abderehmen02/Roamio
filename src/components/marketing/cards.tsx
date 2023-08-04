import { H3, P } from "@/ui/typography"

interface infoCardProps {
    title : string , 
    description : string ,
    button : JSX.Element
}

type listCardProps = {
    list : string[] }


export const InfoCard : React.FC<infoCardProps> = ({ title , description  , button  })=>{
    return <div className="bg-primary text-white  w-72 rounded-lg   flex items-center justify-center gap-3 px-5 py-6 flex-col " >
<H3 >{title}</H3>
<P className="text-center" >{description}</P>
{button}
    </div>
}


export const ListCard : React.FC<listCardProps> = ( {list})=>{
    return <div className="bg-secondary  text-white  w-fit rounded-lg   flex items-center justify-center gap-3 px-16 py-6 flex-col " >
<ul className="list-disc text-primary gap-3" >
{ list.map(item => <li><H3>{item}</H3></li> )
}
</ul>
    </div>
}