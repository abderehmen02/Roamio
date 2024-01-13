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
import { useState } from "react"
export default async  function Home ({ params: { lang }} : LangParam){
    const {t} = await translate(lang)
    const [count , setCount ] = useState(0)
    return <div  className="flex    flex-col  gap-3  w-full pt-6 overflow-hidden     " >
    <div className='maxScreenWidth relative text-white w-full ' >    <FirstUnlogedHeader/></div>
<AppHero/>
<div className=" w-full flex items-center flex-col justify-center" >
<div style={{maxWidth :"1500px"}} className="flex items-center justify-center flex-col" >





<button onClick={()=>setCount(val=>val++)} ></button>
<input value={count} onChange={(e)=>setCount(Number(e.target.value))} >
</input>





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