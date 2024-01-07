"use client"

import { heroTitels } from "@/constants/blog/hero"
import { H3, P } from "@/ui/typography"
import { time } from "console"
import { useEffect, useState } from "react"
import { BlogHeroCard } from "./cards"
import { DisplayAnimation } from "@/providers/animation"
import {motion , useAnimationControls} from "framer-motion"

export const BlogHero = ()=>{
const halfHeroTitels = Math.round( heroTitels.length / 2)
const firstCardAnimation = useAnimationControls()
const secondCardAnimation = useAnimationControls()
const [firstCardTitleIndex , setFirstCardTitleIndex ] = useState(0)
const [secondCardTitleIndex , setSecondCardTitleIndex ] = useState(halfHeroTitels)
const firstCardTitle = heroTitels[firstCardTitleIndex]
const secondCardTitle = heroTitels[secondCardTitleIndex]


// const updateFirstCard= async  ()=>{
//   firstCardAnimation.start({opacity : 0} ,{duration : 0.5} )
  
//   setTimeout(()=> {
//     setFirstCardTitleIndex((currIndex)=>{
//       if(currIndex >= Math.round( heroTitels.length / 2) - 1  ){
//         return 0
//       }
//       else return currIndex + 1
//      })
    
    
//     firstCardAnimation.start({opacity : 1 } , {duration : 0.5}) }  , 500 )

// }        


const updateSecondCard = ()=>{
  secondCardAnimation.start({opacity : 0})

  setSecondCardTitleIndex((currIndex)=>{
    if(currIndex >= heroTitels.length -  1) {
      return Math.round(heroTitels.length / 2)
    }
    else return currIndex  +1
   })

   setTimeout(()=>  secondCardAnimation.start({opacity : 1 , transition : {duration : 2}}) , 500)

}



useEffect(()=>{
  // updateFirstCard()
  updateSecondCard()
      // const firstCardInterval =       setInterval(       updateFirstCard, 20000    )
      const secondCardInterval  = setInterval(updateSecondCard , 16000 )
       return ()=>{
        // clearInterval(firstCardInterval)
        clearInterval(secondCardInterval)
       }       
    }     , [] )
return <div className="flex items-center flex-col laptop:flex-row justify-center relative gap-6" >
  <motion.div className="w-full laptop:w-1/2" initial={{opacity : 0}} animate={{opacity : 1}} > <BlogHeroCard title={firstCardTitle.title} descreption={firstCardTitle.description} className="bg-primaryDark min-h-[170px] "  /></motion.div>
  <motion.div className="w-full laptop:w-1/2" initial={{opacity :0}}  animate={secondCardAnimation} >  <BlogHeroCard className="bg-secondary text-primary min-h-[170px]"  title={secondCardTitle.title} descreption={secondCardTitle.description} /></motion.div>
</div>}