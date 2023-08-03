import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { IconInput } from "@/ui/input"
import { H3 } from "@/ui/typography"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useTranslation } from "@/app/i18n"

export  async function  UnlogedHeader  (){
    const {t} = await useTranslation()

    return(
        <div className="flex w-full items-center justify-around " >
<img src="/logo-color.png" className="w-16 h-16" />
<div className="max-w-3xl " ><IconInput Icon={<i className="bi bi-search "></i>} placeholder={t("unlogedHeader.search")} /></div>
<Link href="/blog" > <H3 className="text-primary " > {t("unlogedHeader.blog")}</H3></Link>
<Link href="/explore" ><H3 className="text-primary" >{t("unlogedHeader.explore")}</H3></Link>
<Link href="/login" > <PrimaryBtn>{t("unlogedHeader.signIn")} <i className="bi bi-person"></i> </PrimaryBtn></Link>
<Link href="/signUp" > <SecondaryBtn>{t("unlogedHeader.signUp")} <i className="bi bi-person-add"></i> </SecondaryBtn></Link>
        </div>
    )
}