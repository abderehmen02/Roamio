import { FirstUnlogedHeader, UnlogedHeader } from "@/components/layout/unlogedHeader"
import {useTranslation as translate } from '../../i18n'
import { LangParam } from "@/types/routing"
import { AppHero } from "./_components/hero"
import { AppFeatures } from "./_components/appFeatures"
import { CategoriesCards } from "./_components/categoriesCards"
import { Page } from "@/ui/containers"
import { getSanityPosts } from "@/utils/blogPosts"
import { ScrollerSection } from "./_components/scrollerSection"
import { FeaturesSection } from "./_components/featuresSection"
import { ValuedPosts } from "./_components/valuedPosts"
import { Footer } from "@/components/layout/footer"
export default async  function Home ({ params: { lang }} : LangParam){
    const {t} = await translate(lang)
    return <div  className="flex    flex-col  gap-3  w-full py-6 overflow-hidden   laptop:py-1  " >
    <div className='maxScreenWidth relative text-white w-full ' >    <FirstUnlogedHeader/></div>
<AppHero/>
<div className=" w-full flex items-center flex-col justify-center" >
<div style={{maxWidth :"1500px"}} className="flex items-center justify-center flex-col" >
<FeaturesSection/>
<ScrollerSection/>
<ValuedPosts/>
{/* <CategoriesCards/>
<AppFeatures/> */}
</div>
<Footer/>
</div>
    </div>
}