import { Title } from "@/ui/title";
import { SignUpCards } from "./_components/cards";
import { SignUpForm } from "./_components/signUpForm";
import { useTranslation } from "@/app/i18n";
import { Page } from "@/ui/containers";

export  default  async function  SignUpPage(){
    const {t} = await useTranslation()
    return <Page  className="flex items-center  flex-col" >
        <Title titleClassName="text-5xl"  title={t("appName")} descreptionClassName="font-semibold" descreption={t("signUp.titleDescreption")} />
        <div className="bg-secondary relativ w-full laptop:w-fit  items-center p-4 laptop:p-16 rounded-xl gap-10 justify-center flex  flex-col laptop:flex-row " >
     <SignUpForm/>
            <SignUpCards/>
        </div>
    </Page>
}