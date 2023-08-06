import { TextButton } from "@/ui/buttons"
import { InfoCard, ListCard } from "../../../../components/marketing/cards"
import { useTranslation } from "@/app/i18n"
import { H2, H4 } from "@/ui/typography"
import Image from "next/image"


export const AppHero : React.FC = async  ()=>{
    const {t} = await useTranslation()

    const heroCardList : string[] =  [t("hero.cardList.findCity") , t("hero.cardList.readAndLearn") , t("hero.cardList.explore") , t("hero.cardList.findEnvirement")]

    
return <div className="flex relative " >
<div className="flex  items-center w-7/12 flex-col py-9 gap-6" >
<div className="flex flex-col items-center  "  >
<H2 className="text-primary capitalize" >{t("appName")}</H2>
<H4>{t("hero.descreption")}</H4>
</div>
<div id="heroListsContainer" className="flex gap-5" >
    <InfoCard title="wanderio" description={t("hero.heroCardDescreption")} button={<TextButton> {t("hero.exploreCities")} </TextButton>} />
    <ListCard list={heroCardList} />
</div>
</div>
<div className="w-5/12  relative" > <Image fill src="/heroMap.svg" style={{objectFit : 'contain'}} alt="hero map cities"  /></div>
</div>
}