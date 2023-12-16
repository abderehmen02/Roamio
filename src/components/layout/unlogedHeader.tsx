import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { IconInput } from "@/ui/input"
import {  H2, H3, H4 } from "@/ui/typography"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useTranslation as translate } from "@/app/i18n"
import { appConfig } from "@/config"
import { UnlogedMobileHeader } from "../headings/mobileHeader"






export  async function  UnlogedHeader  (){
    const {t} = await translate()
    
    return(<>
        <div  className="hidden pt-5  laptop:flex w-full  items-center justify-between px-1 " >
<div className="flex items-center justify-center gap-16 " >
<Link className="flex items-center gap-" href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-16 h-16 " /> < H2 className="font-bold" >Roamio</H2> </Link>
<div className="flex items-center gap-8" >
<Link href={appConfig.links.blog} > <H4  className="capitalize font-semibold" > {t("unlogedHeader.blog")}</H4></Link>
<Link href={appConfig.links.findCities} ><H4  className="capitalize font-semibold" >{t("find city")}</H4></Link>
<Link href={appConfig.links.about} ><H4  className=" font-semibold" >About</H4></Link>
</div>
</div>
<div className="flex items-center gap-8" >
<Link href={appConfig.links.login}  className="capitalize text-lg monsterrat font-semibold" > {t("unlogedHeader.signIn")} <i className="bi bi-person"></i> </Link>
<Link href={appConfig.links.signUp}> <SecondaryBtn className="text-xl capitalize gap-1 font-semibold flex items-center justify-center" >Sign Up<i className="bi mx-0 bi-person-add"></i> </SecondaryBtn></Link>
</div>        </div>
        <div className="flex w-full laptop:hidden" >
            <UnlogedMobileHeader/>
        </div>
        </>
    )
}