import { useTranslation as translate } from "@/app/i18n"
import { Title } from "@/ui/title"
import { H3 } from "@/ui/typography"

export const CitySection = async  ()=>{
    const {t} = await  translate()
    return <div className="flex flex-col bg-white px-4 py-2" >
    <Title title={t("citiesSection.title")} descreption={t("citiesSection.descreption")} />
    </div>
}