import { TextButton } from "@/ui/buttons"
import { InfoCard, ListCard } from "../../../../components/marketing/cards"
import { useTranslation as translate } from "@/app/i18n"
import { H2, H4 } from "@/ui/typography"
import Image from "next/image"
import Link from "next/link"
import { appConfig } from "@/config"


export const AppHero : React.FC = async  ()=>{
    const {t} = await translate()



return <div className=" h-[97vh] bg-opacity-75 w-full " >
<img src="/dubai1.jpg" className="fixed top-0 right-0 -z-50   h-screen w-full " ></img>

</div>
}