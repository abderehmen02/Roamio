import { Title } from "@/ui/title";
import { SignUpCards } from "./_components/cards";
import { SignUpForm } from "./_components/signUpForm";
import { useTranslation as translate } from "@/app/i18n";
import { Page } from "@/ui/containers";
import { appConfig } from "@/config";

export  default  async function  SignUpPage(){
    const {t} = await translate()
    return <Page  className="flex items-center  flex-col" >
        <Title titleClassName="text-5xl"  title={appConfig.name} descreptionClassName="font-semibold" descreption={t("signUp.titleDescreption")} />
        <div className="bg-secondary relativ w-full laptop:w-fit  items-center p-4 laptop:p-16 rounded-xl gap-10 justify-center flex  flex-col desktop:flex-row " >
     <SignUpForm/>
            <SignUpCards/>
        </div>
    </Page>
}