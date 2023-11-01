import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { IconInput } from "@/ui/input"
import { H3 } from "@/ui/typography"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useTranslation as translate } from "@/app/i18n"
import { Settings } from "../headings/settingList"
import { appConfig } from "@/config"



export  async function  LoggedHeader  (){
    const {t} = await translate()
    return(<>
<div  className="flex w-full items-center bg-pageBg  top-0 px-5 laptop:px-10 z-50 fixed pt-5  justify-between" >        
<Link href={appConfig.links.home}  ><img alt="appLogo" src={appConfig.logoImage} className="w-16 h-16 z-50 relative" /></Link>
<div className="flex gap-24  w-fit relative z-50    h-fit" >

{/* <Link href="/" > <H3 className="text-primary " > {t("unlogedHeader.blog")}</H3></Link> */}
<Link href="/" className="hidden laptop:block" > <PrimaryBtn  >{t("loggedHeader.findTargetCity")} <i className="bi bi-newspaper"></i> </PrimaryBtn></Link>
<Settings/>
</div>
</div>
</>
    )
}