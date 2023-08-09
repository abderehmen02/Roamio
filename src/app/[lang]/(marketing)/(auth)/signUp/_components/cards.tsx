import { useTranslation } from "@/app/i18n"
import { InfoCard, cardsColors } from "@/components/marketing/cards"


export const SignUpCards = async ()=>{ 
    const {t }  = await  useTranslation()
    return <div  className="flex flex-col gap-10 items-center justify-between   " >
    <InfoCard className="border-2 border-black" color={cardsColors.secondary} title={t("signUp.cards.firstCardTitle")}   description={t("signUp.cards.firstCardDescreption")}/>
    <InfoCard className="border-2 border-black" color={cardsColors.secondary} title={t("signUp.cards.secondCardTitle")}  description={t("signUp.cards.secondCardDescreption")} />
    <InfoCard className="border-2 border-black" color={cardsColors.secondary} title={t("signUp.cards.thirdCardTitle")} description={t("signUp.cards.thirdCardDescreption")} />
    </div>
}