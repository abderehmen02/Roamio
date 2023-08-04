import { TextButton } from "@/ui/buttons"
import { InfoCard, ListCard } from "../../../../components/marketing/cards"
import { useTranslation } from "@/app/i18n"
import { H2, H3, H4 } from "@/ui/typography"



export const AppHero : React.FC = async  ()=>{
    const {t} = await useTranslation()

    const heroCardList : string[] =  [t("hero.cardList.findCity") , t("hero.cardList.readAndLearn") , t("hero.cardList.explore") , t("hero.cardList.findEnvirement")]

    
return <div className="flex items-center flex-col py-9 gap-6" >
<div className="flex flex-col items-center  "  >
<H2 className="text-primary" >{t("appName")}</H2>
<H4>{t("hero.descreption")}</H4>
</div>
<div id="heroListsContainer" className="flex gap-5" >
    <InfoCard title="wanderio" description={t("hero.heroCardDescreption")} button={<TextButton> {t("hero.exploreCities")} </TextButton>} />
    <ListCard list={heroCardList} />
</div>
</div>
}