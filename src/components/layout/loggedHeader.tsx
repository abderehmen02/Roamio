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
import { usePathname } from "next/navigation"


export  function  LoggedHeader  (){
    const {t} =  useTranslation()
    const [scrollPosition, setScrollPosition] = useState(0);
    const pathname = usePathname()
    console.log("pathname" , pathname)
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
<div   className={cn( "flex w-full items-center     top-0 px-5 laptop:px-10 z-50 fixed   laptop:pb-4 laptop:pt-4  justify-between" , { "bg-white" : typeof window !== "undefined" && 10 < scrollPosition} )} >
<div>
<Link className="flex items-center gap-" href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-16 h-16 " /> < H2 className="font-bold" >Roamio</H2> </Link>
</div>
<div className="flex flex-row items-center justify-center gap-14" >
<Link  className={cn('font-semibold border-b-4 border-transparent   flex pb-2 items-center justify-center gap-1 ', {" border-b-primary text-primary" : pathname?.includes("dashboard")  , "hover:text-blue-400 hover:border-b-blue-400 active:text-primary active:border-b-primary" : !pathname?.includes("dashboard")}  )} href={appConfig.links.home}  ><H3 className="block" >Find Cities</H3><PublicIcon/></Link>
<Link  className={cn('font-semibold border-b-4 border-transparent   flex pb-2 items-center justify-center gap-1 ', {" border-b-primary text-primary" : pathname?.includes(appConfig.links.blog)  , "hover:text-blue-400 hover:border-b-blue-400 active:text-primary active:border-b-primary" :  !pathname?.includes(appConfig.links.blog)} )} href={appConfig.links.blog}  ><H3 className="block" >Blog</H3><ArticleIcon/></Link>
<Link  className={cn('font-semibold border-b-4 border-transparent   flex pb-2 items-center justify-center gap-1 '  , {" border-b-primary text-primary" : pathname?.includes(appConfig.links.about) , "hover:text-blue-400 hover:border-b-blue-400 active:text-primary active:border-b-primary" :  !pathname?.includes(appConfig.links.about) })} href={appConfig.links.about}  ><H3 className="block" >About</H3><NewspaperIcon/></Link>
<Link  className={cn('font-semibold border-b-4 border-transparent   flex pb-2 items-center justify-center gap-1 '  , {" border-b-primary text-primary" : pathname?.includes(appConfig.links.savedCities) , "hover:text-blue-400 hover:border-b-blue-400 active:text-primary active:border-b-primary" :  !pathname?.includes(appConfig.links.savedCities) })} href={appConfig.links.savedCities}  ><H3 className="block" >Saved Cities</H3><BookmarkIcon/></Link>

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