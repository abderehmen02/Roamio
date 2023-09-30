import { useTranslation } from "@/app/i18n"
import { ListActionCard } from "@/components/marketing/cards"
import { TextButton } from "@/ui/buttons"
import Link from "next/link"



export  const AppFeatures : React.FC = async  ()=>{
    const {t} = await useTranslation()

     const appFeatures : string[] = [
        t("homeFeaturesList.featureOne")   , t("homeFeaturesList.featureThree") ,
"ind destinations that match your budget, ensuring cost-effective travel planning." ,
"Receive tailored destination suggestions based on your preferences, ensuring a customized travel experience." ,
"ccess user-generated reviews and ratings to make informed travel decisions",
" Rate and review cities to share your experiences and insights with the community."
   ] 
   


    return <div className="flex px-16 py-9 items-center justify-center" >
        <ListActionCard list={appFeatures} btn={<Link href="/blog " ><TextButton className="capitalize" >{t("homeFeaturesList.readAboutCities")}</TextButton></Link>} />       
    </div>
}