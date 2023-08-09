import { Title } from "@/ui/title";
import { SignUpCards } from "./_components/cards";
import { SignUpForm } from "./_components/signUpForm";
import { useTranslation } from "@/app/i18n";

export  default  async function  SignUpPage(){
    const {t} = await useTranslation()
    return <div  className="flex items-center flex-col" >
        <Title className="my-12" title={t("appName")} descreptionClassName="font-semibold" descreption={t("signUp.titleDescreption")} />
        <div className="bg-secondary relativ w-fit e items-center p-16 rounded-xl gap-10 justify-center flex" >
     <SignUpForm/>
            <SignUpCards/>
        </div>
    </div>
}