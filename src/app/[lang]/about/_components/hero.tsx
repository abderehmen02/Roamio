import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { H1 } from "@/ui/typography"




export const AboutHero = ()=>{
    return <div  className="flex w-full items-center  justify-between bg-orange-400 gap-20 " >
        <div className="w-[400px] flex items-start justify-center flex-col gap-9" >
            <H1>How to Find the Best Cities for Your Travel Goals with Roamio’s Customizable Filters</H1>
            <div className="flex items-center justify-center gap-5" >
            <PrimaryBtn>Find Cities</PrimaryBtn>
            <SecondaryBtn>Explore Articles</SecondaryBtn>
            </div>
        </div>
            <img src="/planet.png " className="w-[400px] object-contain" />
        </div>
}