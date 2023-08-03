import { UnlogedHeader } from "@/components/layout/unlogedHeader"
import {useTranslation} from '../../i18n'
import { LangParam } from "@/types/routing"
export default async  function Home ({ params: { lang }} : LangParam){
    const {t} = await useTranslation(lang)
    return <div className="flex w-full flex-col bg-white" >
<UnlogedHeader/>
<h1>{t("title")}</h1>
    </div>
}