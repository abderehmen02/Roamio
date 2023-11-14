import { UnlogedHeader } from "@/components/layout/unlogedHeader"
import {useTranslation as translate } from '../../i18n'
import { LangParam } from "@/types/routing"
import { AppHero } from "./_components/hero"
import { AppFeatures } from "./_components/appFeatures"
import { CategoriesCards } from "./_components/categoriesCards"
import { Page } from "@/ui/containers"
import { getSanityPosts } from "@/utils/blogPosts"
export default async  function Home ({ params: { lang }} : LangParam){
    const {t} = await translate(lang)
    const sanityPosts = await getSanityPosts()
    console.log("sanity posts"   , sanityPosts)
    return <Page >
<AppHero/>
<CategoriesCards/>
<AppFeatures/>

    </Page>
}