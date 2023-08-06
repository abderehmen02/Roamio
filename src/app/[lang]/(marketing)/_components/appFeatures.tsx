import { useTranslation } from "@/app/i18n"
import { ListActionCard } from "@/components/marketing/cards"
import { TextButton } from "@/ui/buttons"
import Link from "next/link"



export  const AppFeatures : React.FC = async  ()=>{
    const {t} = await useTranslation()

     const appFeatures : string[] = [
        t("homeFeaturesList.featureOne") , t("homeFeaturesList.featureTwo")  , t("homeFeaturesList.featureThree") 
   ] 
   


    return <div className="flex px-16 py-9 items-center justify-center" >
        <ListActionCard list={appFeatures} btn={<Link href="/blog " ><TextButton className="capitalize" >{t("homeFeaturesList.readAboutCities")}</TextButton></Link>} />       
    </div>
}