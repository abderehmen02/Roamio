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
        <div className="flex w-full relative z-10    pt-5 gap-24 justify-center" >
<img src="/logo-color.png" className="w-16 h-16" />
<div className="flex gap-24  items-center   h-fit" >

<div className="max-w-3xl " ><IconInput Icon={<i className="bi bi-search "></i>} placeholder={t("unlogedHeader.search")} /></div>
<Link href="/" > <H3 className="text-primary " > {t("loggedHeader.findTargetCity")}</H3></Link>
<Link href="/cityData" ><H3 className="text-primary" >{t("loggedHeader.cityData")}</H3></Link>
<Link href="/Blog" > <PrimaryBtn>{t("unlogedHeader.blog")} <i className="bi bi-newspaper"></i> </PrimaryBtn></Link>
</div>
<Settings/>
        </div>
    )
}