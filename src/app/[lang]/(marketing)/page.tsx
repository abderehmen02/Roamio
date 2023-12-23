import { UnlogedHeader } from "@/components/layout/unlogedHeader"
import {useTranslation as translate } from '../../i18n'
import { LangParam } from "@/types/routing"
import { AppHero } from "./_components/hero"
import { AppFeatures } from "./_components/appFeatures"
import { CategoriesCards } from "./_components/categoriesCards"
import { Page } from "@/ui/containers"
import { getSanityPosts } from "@/utils/blogPosts"
import { ScrollerSection } from "./_components/scrollerSection"
export default async  function Home ({ params: { lang }} : LangParam){
    const {t} = await translate(lang)
    const sanityPosts = await getSanityPosts()
    return <div  className="flex pb-8   flex-col  gap-3  w-full py-6    laptop:py-1  " >
    <div className='maxScreenWidth relative text-white w-full ' >    <UnlogedHeader/></div>
<AppHero/>
<div className="bg-white w-full" >
<div style={{maxWidth :"1500px"}} >
<ScrollerSection/>
{/* <CategoriesCards/>
<AppFeatures/> */}
</div>
</div>
    </div>
}