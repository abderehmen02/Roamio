import { useTranslation } from "@/app/i18n"
import { InfoCard } from "@/components/marketing/cards"


export const SignUpCards = async ()=>{ 
    const {t }  = await  useTranslation()
    return <div  className="flex flex-col gap-10 items-center justify-between  " >
    <InfoCard title={t("signUp.cards.firstCardTitle")}   description={t("signUp.cards.firstCardDescreption")}/>
    <InfoCard title={t("signUp.cards.secondCardTitle")}  description={t("signUp.cards.secondCardDescreption")} />
    <InfoCard  title={t("signUp.cards.thirdCardtitle")} description={t("signUp.cards.thirdCardDescreption")} />
    </div>
}