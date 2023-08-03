import { TextButton } from "@/ui/buttons"
import { InfoCard } from "./cards"
import { useTranslation } from "@/app/i18n"

export const AppHero : React.FC = async  ()=>{
    const {t} = await useTranslation()
return <div>
    <InfoCard title="wanderio" description={t("hero.heroCardDescreption")} button={<TextButton> {t("hero.exploreCities")} </TextButton>} />
</div>
}