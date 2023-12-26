import { appConfig } from "@/config"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import Link from "next/link"
import { useTranslation as translate } from "@/app/i18n"
import { H2, H3 } from "@/ui/typography"








export const BLogHeader = async  ()=>{
    const {t} = await translate()
    return      <>
    <div  className="hidden  laptop:flex w-full px-6  items-center justify-between py-2" >
<Link href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-16 h-16" /></Link>
<Link href={appConfig.links.home}> <PrimaryBtn>Back To Home </PrimaryBtn></Link>
    </div>
    <div className="flex  w-full laptop:hidden" >
    <div  className="flex w-full z-30 items-center fixed  staticBg top-0 justify-between" >
<Link href={appConfig.links.home} > <img src={appConfig.logoImage} className="w-16 h-16"  /></Link>
<Link href={appConfig.links.home} className="mx-2" ><PrimaryBtn >Back To Home</PrimaryBtn></Link>
    </div>
    </div>
    </>
}