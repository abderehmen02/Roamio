import { TextButton } from "@/ui/buttons"
import { InfoCard, ListCard } from "../../../../components/marketing/cards"
import { useTranslation } from "@/app/i18n"
import { H2, H4 } from "@/ui/typography"
import Image from "next/image"
import Link from "next/link"
import { appConfig } from "@/config"


export const AppHero : React.FC = async  ()=>{
    const {t} = await useTranslation()

    const heroCardList : string[] =  [t("hero.cardList.findCity") , t("hero.cardList.readAndLearn") , t("hero.cardList.explore") , t("hero.cardList.findEnvirement")]

    
return <div className="flex w-full gap-8 relative items-center justify-center  flex-col laptop:flex-row " >
<div className="flex  items-center w-full laptop:w-8/12 flex-col py-9 gap-6" >
<div className="flex flex-col items-center  "  >
<H2 className="text-primary capitalize" >{t("appName")}</H2>
<H4>{t("hero.descreption")}</H4>
</div>
<div id="heroListsContainer " className="flex  gap-5 flex-col px-4 w-full items-center justify-stretch  tablet:justify-center tablet:items-stretch tablet:flex-row" >
    <InfoCard title="wanderio" className="w-full tablet:w-fit"  description={t("hero.heroCardDescreption")} button={<Link href={appConfig.links.findCities} > <TextButton> {t("hero.exploreCities")} </TextButton></Link>} />
    <ListCard  list={heroCardList} className="w-full tablet:w-fit"  />
</div>
</div>
<img  src="/heroMap.svg" style={{width : '300px' }} alt="hero map cities"  />
</div>
}