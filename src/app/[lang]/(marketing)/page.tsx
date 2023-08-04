import { UnlogedHeader } from "@/components/layout/unlogedHeader"
import {useTranslation} from '../../i18n'
import { LangParam } from "@/types/routing"
import { AppHero } from "./_components/hero"
export default async  function Home ({ params: { lang }} : LangParam){
    const {t} = await useTranslation(lang)
    return <div className="flex w-full flex-col bg-teal-100" >
<UnlogedHeader/>
<AppHero/>
    </div>
}