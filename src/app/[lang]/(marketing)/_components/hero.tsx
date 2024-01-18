"use client"
import { PrimaryBtn, SecondaryBtn, TextButton } from "@/ui/buttons"
import { useTranslation as translate } from "@/app/i18n"
import { H1,  H4 } from "@/ui/typography"
import { appLongTitles } from "@/constants/blog/hero"
import {motion , useAnimation} from "framer-motion"
import { useTranslation } from "@/app/i18n/client"
import { useEffect, useRef, useState } from "react"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link"
import { appConfig } from "@/config"

const citiesImageNames = [ "Barcelona" , "dubai" , "Moscow" , "paris" , "sanDiego" , "sanFransisco" , "Sydney" ]

// ${Math.floor(Math.random()*2 + 1)}
// Math.floor(Math.random() * ( citiesImageNames.length - 1))
export const AppHero : React.FC =   ()=>{
    const {t} = useTranslation()
    const currCityImgIndex = useRef(0)
    const currImgIndex = useRef(1)
    const firstFrameAnimation = useAnimation()
    const secondFrameAnimation = useAnimation()
    const framePositions = ['0vw'  , "-100vw"  , "100vw" ]
    let firstFramePositionIndex = 0 ;
    let secondFramePositionIndex = 0 
   const [firstFrameImg , setFirstFrameImg ] = useState(`/compresedCities/${citiesImageNames[currCityImgIndex.current || 1]}${currImgIndex.current}.jpg`)
   const [secondFrameImg , setSecondFrameImg ] = useState(`/compresedCities/${citiesImageNames[(currCityImgIndex.current || 1)+ 1]}${(currImgIndex.current  || 1)+ 1}.jpg`)
   const [firstFrameTitle , setFirstFrameTitle ] = useState(appLongTitles[Math.floor(Math.random() * (appLongTitles.length - 1 ))])
   const [secondFrameTitle , setSecondFrameTitle ] = useState(appLongTitles[Math.floor(Math.random() * (appLongTitles.length - 1 ))])   



// const animateToRight = ()=>{
//     if(firstFramePositionIndex === 0 && secondFramePositionIndex === 0){
const nextImg = ()=>{
    if(currCityImgIndex.current === citiesImageNames.length - 1){
        currCityImgIndex.current = 0
    }
    else {
        currCityImgIndex.current += 1 
    }
    if(currImgIndex.current === 3){
      currImgIndex.current = 1
    }
    else {
        currImgIndex.current += 1
    }
}    
    
    
//     firstFrameAnimation.start({x: '-100vw' , transition : {duration : 1.5 , ease : "easeIn"}}).then(()=>{
//             firstFrameAnimation.set({x : '100vw' })
//             firstFramePositionIndex = 2
//             setFirstFrameImg(`/${citiesImageNames[Math.floor(Math.random() * ( citiesImageNames.length - 1))]}${Math.floor(Math.random()*2 + 1)}.jpg`)
//             setFirstFrameTitle(appLongTitles[Math.floor(Math.random() * (appLongTitles.length - 1 ))])
//         })
//     secondFrameAnimation.start({x : '-100vw' , transition : {duration : 1.5 , ease : "easeIn"} }).then(()=>{
//            secondFramePositionIndex = 1
//     })
//     }
    
    
    
    
    
    
//     else if (firstFramePositionIndex ===2 && secondFramePositionIndex === 1){
//         firstFrameAnimation.start({x: 0 , transition : {duration : 1.5 , ease : "easeIn"}}).then(()=>{
//             firstFramePositionIndex = 0
//         })
//     secondFrameAnimation.start({x : '-200vw' , transition : {duration : 1.5 , ease : "easeIn"} }).then(()=>{
//         secondFrameAnimation.set({x : 0})
//         setSecondFrameImg(`/${citiesImageNames[Math.floor(Math.random() * ( citiesImageNames.length - 1))]}${Math.floor(Math.random()*2 + 1)}.jpg`)
//            secondFramePositionIndex = 0
//            setSecondFrameTitle(appLongTitles[Math.floor(Math.random() * (appLongTitles.length - 1 ))])
//     })
    
//     }
//         }












        


const animateFrames = ()=>{
nextImg()
if(firstFramePositionIndex === 0 && secondFramePositionIndex === 0){



firstFrameAnimation.start({x: '-100vw' , transition : {duration : 1.5 , ease : "easeIn"}}).then(()=>{
        firstFrameAnimation.set({x : '100vw' })
        firstFramePositionIndex = 2
        setFirstFrameImg(`/compresedCities/${citiesImageNames[Math.floor(Math.random() * ( citiesImageNames.length - 1))]}${Math.floor(Math.random()*2 + 1)}.jpg`)
        setFirstFrameTitle(appLongTitles[Math.floor(Math.random() * (appLongTitles.length - 1 ))])
    })
secondFrameAnimation.start({x : '-100vw' , transition : {duration : 1.5 , ease : "easeIn"} }).then(()=>{
       secondFramePositionIndex = 1
})
}






else if (firstFramePositionIndex ===2 && secondFramePositionIndex === 1){
    firstFrameAnimation.start({x: 0 , transition : {duration : 1.5 , ease : "easeIn"}}).then(()=>{
        firstFramePositionIndex = 0
    })
secondFrameAnimation.start({x : '-200vw' , transition : {duration : 1.5 , ease : "easeIn"} }).then(()=>{
    secondFrameAnimation.set({x : 0})
    setSecondFrameImg(`/compresedCities/${citiesImageNames[Math.floor(Math.random() * ( citiesImageNames.length - 1))]}${Math.floor(Math.random()*2 + 1)}.jpg`)
       secondFramePositionIndex = 0
       setSecondFrameTitle(appLongTitles[Math.floor(Math.random() * (appLongTitles.length - 1 ))])
})

}

// firstFrameAnimation.set({x :})
}

useEffect(()=>{
let intervalId = setInterval(()=>{
    animateFrames()
} , 22000)
return ()=>{
    clearInterval(intervalId)
}
},[])


return <div className="w-fulll " >
<div className="w-fit flex " >



<motion.div  initial={{x: 0}} style={{height : "calc(100vh - 110px)"}} animate={firstFrameAnimation} className="  bg-opacity-75 w-screen flex items-center justify-start  px-3 laptop:px-32 relative" >
{ currCityImgIndex.current === 0  && currImgIndex.current === 1 && <img alt="Barcelona street blur image" src="/compresedCities/Barcelona1-blur.webp"  style={{zIndex  : -60 }}  className="absolute -top-24 right-0   w-full   h-screen " />}
<img alt={citiesImageNames[currCityImgIndex.current]+ " image"}  style={{objectFit : "cover"}} src={firstFrameImg} className="absolute -top-24 right-0 -z-50  w-full   h-screen " ></img>
<div className="heroOverlay absolute -top-24 right-0 w-full h-screen -z-40" ></div>
{/* <ChevronRightIcon onClick={animateToRight}    className="bi text-white absolute  top-[40%]    right-5 cursor-pointer text-5xl "  ></ChevronRightIcon> */}
{/* <ChevronRightIcon onClick={animateToRight}    className="bi text-white rotate-180 absolute  top-[40%]    left-5 cursor-pointer text-5xl "  ></ChevronRightIcon><div className="absolute -top-24  right-0 -z-40   h-screen w-full heroOverlay" ></div> */}
<div className="flex z-0 flex-col w-full laptop:w-[700px]  relative gap-5 text-white " >
<H1 className=" z-10 " >ِ{firstFrameTitle.title}</H1>
<H4 className="font-normal text-xl z-10 relative" >{firstFrameTitle.description}</H4>
<Link href={appConfig.links.findCities} className="w-fit"  ><SecondaryBtn>Explore Cities <i className="bi bi-globe-americas"></i></SecondaryBtn></Link>
</div>
</motion.div>
 

<motion.div  initial={{x: 0}} style={{height : "calc(100vh - 110px)" , zIndex : 0}} animate={secondFrameAnimation} className="  bg-opacity-75 w-screen flex items-center justify-start px-3 laptop:px-32 relative" >
<img alt={citiesImageNames[(currCityImgIndex.current || 1)+ 1]   + " image"} src={secondFrameImg} className="absolute -top-24 right-0 -z-50 object-cover w-full  h-screen " ></img>
<div className="heroOverlay absolute -top-24 right-0 w-full h-screen -z-40" ></div>

{/* <ChevronRightIcon onClick={animateToRight}    className="bi text-white absolute  top-[40%]    right-5 cursor-pointer text-5xl "  ></ChevronRightIcon> */}
{/* <ChevronRightIcon onClick={animateToRight}    className="bi text-white rotate-180 absolute  top-[40%]    left-5 cursor-pointer text-5xl "  ></ChevronRightIcon><div className="absolute -top-24  right-0 -z-40   h-screen w-full heroOverlay" ></div> */}
<div className="flex z-0 flex-col w-full lg:w-[700px] relative gap-5 text-white " >
<H1 className=" z-10 " >ِ{secondFrameTitle.title}</H1>
<H4 className="font-normal text-xl z-10 relative" >{secondFrameTitle.description}</H4>
<Link href={appConfig.links.findCities} className="w-fit"  ><SecondaryBtn>Explore Cities <i className="bi bi-globe-americas z0 relative"></i></SecondaryBtn></Link>
</div>
</motion.div>
 


{/* <motion.div  initial={{x: 0}} style={{height : "calc(100vh - 110px)" }} animate={secondFrameAnimation} className="   bg-opacity-75 w-screen flex items-center justify-start px-32 relative " >
<img src={secondFrameImg} className="absolute -top-24 right-0 -z-50 object-cover w-full  h-screen " ></img>
<ChevronRightIcon  style={{zIndex : 100}}  className="bi text-white absolute  top-[40%] right-5 cursor-pointer text-5xl bi-arrow-right-short" onClick={animateToRight} ></ChevronRightIcon>
<i className="bi rotate-180  absolute top-[40%] left-5 cursor-pointer text-5xl text-white bi-arrow-right-short"></i>
<div className="absolute -top-24  right-0 -z-40   h-screen w-full heroOverlay" ></div>
<div className="flex flex-col relative z-10 w-[700px] gap-5 text-white  " >
<H1 className="font-semibold " >ِ{secondFrameTitle.title}</H1>
<H4 className="font-normal text-xl" >{secondFrameTitle.description}</H4>
<PrimaryBtn className="w-fit"  onClick={()=>alert("working!")} >Explore Cities <i className="bi bi-globe-americas"></i></PrimaryBtn>
</div>
</motion.div>
 */}

</div>
</div>
}