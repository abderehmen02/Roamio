"use client"

import { useTranslation } from "@/app/i18n/client"
import { Title } from "@/ui/title"
import { LandmarkCard } from "./landmarkCard"

export const Landmarks : React.FC<{landmarks : string[]}> = ({landmarks})=>{
    const {t} = useTranslation()
    return <div  >
        <Title title={t("Landmarks")} />
        {landmarks.map(landmark=><LandmarkCard landMark={landmark} />)}
    </div>
}