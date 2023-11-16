import { appConfig } from "@/config"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import Link from "next/link"
import { useTranslation as translate } from "@/app/i18n"








export const BLogHeader = async  ()=>{
    const {t} = await translate()
    return      <div  className="  fixed top-0 flex w-full  items-center justify-between px-1 " >
<Link href={appConfig.links.home} ><img alt={appConfig.name + "logo"} src={appConfig.logoImage} className="w-16 h-16" /></Link>
<div className="flex items-center justify-center gap-11" >
<Link href={appConfig.links.home}> <PrimaryBtn  >Back To Home </PrimaryBtn></Link>
</div>
       </div>
}