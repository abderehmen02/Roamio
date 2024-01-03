import { AboutCard } from "@/components/about/aboutCard"
import { aboutFeatures } from "@/config/about"
import { H1 } from "@/ui/typography"

export const FeaturesCards = ()=>{
    return <div className="flex flex-col items-center justify-center gap-8 py-6 px-3" >
    <H1>What You Can Use Roamio For</H1>
    <div className="flex flex-col items-center justify-center gap-8 py-6 px-3" >
     {
        aboutFeatures.map(aboutFeature =><AboutCard {...aboutFeature} />)
     }
    </div>
    </div>
}