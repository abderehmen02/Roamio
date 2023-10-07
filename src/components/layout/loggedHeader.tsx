import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { IconInput } from "@/ui/input"
import { H3 } from "@/ui/typography"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useTranslation } from "@/app/i18n"
import { Settings } from "../headings/settingList"



export  async function  LoggedHeader  (){
    const {t} = await useTranslation()
    return(
        <div  className="flex w-full  bg-pageBg  top-0 px-10 z-50 fixed pt-5 gap-24 justify-between" >        
<img src="/logo-color.png " className="w-16 h-16 z-50 relative" />
<div className="flex gap-24  relative z-50    h-fit" >

{/* <Link href="/" > <H3 className="text-primary " > {t("unlogedHeader.blog")}</H3></Link> */}
<Link href="/" > <PrimaryBtn  >{t("loggedHeader.findTargetCity")} <i className="bi bi-newspaper"></i> </PrimaryBtn></Link>
<Settings/>
</div>


        </div>
    )
}