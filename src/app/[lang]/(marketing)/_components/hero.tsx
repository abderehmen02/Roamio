"use client"
import { PrimaryBtn, TextButton } from "@/ui/buttons"
import { useTranslation as translate } from "@/app/i18n"
import { H1,  H4 } from "@/ui/typography"
import { appLongTitles } from "@/constants/blog/hero"
import {motion , useAnimation} from "framer-motion"
import { useTranslation } from "@/app/i18n/client"
import { useEffect, useState } from "react"


const citiesImageNames = [ "Barcelona" , "dubai" , "Moscow" , "paris" , "sanDiego" , "sanFransisco" , "Sydney" ]

export const AppHero : React.FC =   ()=>{
    const {t} = useTranslation()
    const [currImageNameIndex , CurrImageNameIndex ] = useState<number>(Math.floor(Math.random() * 6))
    const firstFrameAnimation = useAnimation()
    const secondFrameAnimation = useAnimation()
    const framePositions = ['0vw'  , "-100vw"  , "100vw" ]
    let firstFramePositionIndex = 0 ;
    let secondFramePositionIndex = 0 

const firstFrameImg = `/${citiesImageNames[Math.floor(Math.random() * citiesImageNames.length - 1)]}${Math.floor(Math.random()*4)}.jpg`
const secondFrameImg = `/${citiesImageNames[Math.floor(Math.random() * citiesImageNames.length - 1)]}${Math.floor(Math.random()*4)}.jpg`
const firstFrameTitle  = appLongTitles[Math.floor(Math.random() * appLongTitles.length - 1 )]
const secondFrameTitle  = appLongTitles[Math.floor(Math.random() * appLongTitles.length - 1 )]


const animateFirstFrame = ()=>{
if(firstFramePositionIndex === 0 && secondFramePositionIndex === 0){



firstFrameAnimation.start({x: '-100vw' , transition : {duration : 1.5 , ease : "easeIn"}}).then(()=>{
        firstFrameAnimation.set({x : '100vw' })
        firstFramePositionIndex = 2
    })
secondFrameAnimation.start({x : '-100vw' , transition : {duration : 1.5 , ease : "easeIn"} }).then(()=>{
       secondFramePositionIndex = 1
})
}


// firstFrameAnimation.set({x :})
}

useEffect(()=>{
let intervalId = setInterval(()=>{
    animateFirstFrame()
} , 6000)
return ()=>{
    clearInterval(intervalId)
}
},[])


return <div className="w-fulll " >
<div className="w-fit flex " >



<motion.div  initial={{x: 0}} style={{height : "calc(100vh - 110px)" , zIndex : -60}} animate={firstFrameAnimation} className="  bg-opacity-75 w-screen flex items-center justify-start px-32 relative " >
<img src={firstFrameImg} className="absolute -top-24 right-0 -z-50 object-cover w-full  h-screen " ></img>
<i  className="bi text-white absolute  top-[40%] z-0 right-5 cursor-pointer text-5xl bi-arrow-right-short"></i>
<i className="bi rotate-180  absolute top-[40%] left-5 z-0 cursor-pointer text-5xl text-white bi-arrow-right-short"></i>
<div className="absolute -top-24  right-0 -z-40   h-screen w-full heroOverlay" ></div>
<div className="flex z-0 flex-col w-[700px] relative gap-5 text-white " >
<H1 className="font-semibold z-10 " >ِ{firstFrameTitle.title}</H1>
<H4 className="font-normal text-xl z-10 relative" >{firstFrameTitle.description}</H4>
<PrimaryBtn className="w-fit" >Explore Cities <i className="bi bi-globe-americas"></i></PrimaryBtn>
</div>
</motion.div>
 



<motion.div  initial={{x: 0}} style={{height : "calc(100vh - 110px)" , zIndex : -60}} animate={secondFrameAnimation} className="   bg-opacity-75 w-screen flex items-center justify-start px-32 relative " >
<img src={secondFrameImg} className="absolute -top-24 right-0 -z-50 object-cover w-full  h-screen " ></img>
<i  className="bi text-white absolute  top-[40%] right-5 cursor-pointer text-5xl bi-arrow-right-short"></i>
<i className="bi rotate-180  absolute top-[40%] left-5 cursor-pointer text-5xl text-white bi-arrow-right-short"></i>
<div className="absolute -top-24  right-0 -z-40   h-screen w-full heroOverlay" ></div>
<div className="flex flex-col relative z-10 w-[700px] gap-5 text-white  " >
<H1 className="font-semibold " >ِ{secondFrameTitle.title}</H1>
<H4 className="font-normal text-xl" >{secondFrameTitle.description}</H4>
<PrimaryBtn className="w-fit" >Explore Cities <i className="bi bi-globe-americas"></i></PrimaryBtn>
</div>
</motion.div>


</div>
</div>
}