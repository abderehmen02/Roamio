"use client"
import { PrimaryBtn} from "@/ui/buttons"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Settings } from "../headings/settingList"
import { appConfig } from "@/config"
import { useTranslation } from "@/app/i18n/client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/tailwind"
import { H2, H3 } from "@/ui/typography"
import PublicIcon from '@mui/icons-material/Public';
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export  function  LoggedHeader  (){
    const {t} =  useTranslation()
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
    typeof window !== "undefined" &&        window.addEventListener('scroll', handleScroll);
        return () => {
    typeof window !== "undefined" &&        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(<>
<div  className={cn( "flex w-full items-center    top-0 px-5 laptop:px-10 z-50 fixed   laptop:pb-4 laptop:pt-4  justify-between" , { "bg-white" : typeof window !== "undefined" && 10 < scrollPosition} )} >
<div>
<Link className="flex items-center gap-" href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-16 h-16 " /> < H2 className="font-bold" >Roamio</H2> </Link>
</div>
<div className="flex flex-row items-center justify-center gap-14" >
<Link  className={cn('font-semibold flex  items-center justify-center gap-1 ')} href={appConfig.links.home}  ><H3 className="block" >Find Cities</H3><PublicIcon/></Link>
<Link  className={cn('font-semibold flex  items-center justify-center gap-1 ')} href={appConfig.links.home}  ><H3 className="block" >Blog</H3><ArticleIcon/></Link>
<Link  className={cn('font-semibold flex  items-center justify-center gap-1 ')} href={appConfig.links.home}  ><H3 className="block" >About</H3><NewspaperIcon/></Link>
<Link  className={cn('font-semibold flex  items-center justify-center gap-1 ')} href={appConfig.links.home}  ><H3 className="block" >Saved Cities</H3><BookmarkIcon/></Link>

</div>
<div className="flex gap-24  w-fit relative z-50    h-fit" >
{/* <Link href="/" > <H3 className="text-primary " > {t("unlogedHeader.blog")}</H3></Link> */}
{/* <Link href="/" className="hidden laptop:block" > <PrimaryBtn  >{t("loggedHeader.findTargetCity")} <i className="bi bi-newspaper"></i> </PrimaryBtn></Link> */}
<Settings/>
</div>
</div>
</>
    )
}