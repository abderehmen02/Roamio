import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { IconInput } from "@/ui/input"
import { H3 } from "@/ui/typography"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useTranslation } from "@/app/i18n"
import { appConfig } from "@/config"

export  async function  UnlogedHeader  (){
    const {t} = await useTranslation()

    return(
        <div  className="flex w-full items-center justify-around " >
<Link href={appConfig.links.home} ><img src={appConfig.logoImage} className="w-16 h-16" /></Link>
<Link href={appConfig.links.blog} > <H3 className="text-primary " > {t("unlogedHeader.blog")}</H3></Link>
<Link href={appConfig.links.findCities} ><H3 className="text-primary" >{t("find city")}</H3></Link>
<Link href={appConfig.links.login}> <PrimaryBtn>{t("unlogedHeader.signIn")} <i className="bi bi-person"></i> </PrimaryBtn></Link>
<Link href={appConfig.links.signUp}> <SecondaryBtn>{t("unlogedHeader.signUp")} <i className="bi bi-person-add"></i> </SecondaryBtn></Link>
        </div>
    )
}