import { UnlogedHeader } from "@/components/layout/unlogedHeader"
import {useTranslation} from '../../i18n'
import { LangParam } from "@/types/routing"
import { AppHero } from "./_components/hero"
import { AppFeatures } from "./_components/appFeatures"
import { CategoriesCards } from "./_components/categoriesCards"
import { Page } from "@/ui/containers"
export default async  function Home ({ params: { lang }} : LangParam){
    const {t} = await useTranslation(lang)
    return <Page >
<AppHero/>
<CategoriesCards/>
<AppFeatures/>

    </Page>
}