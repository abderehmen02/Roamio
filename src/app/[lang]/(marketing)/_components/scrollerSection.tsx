"use client"
import { InfoCard, LandmarkCard } from "@/components/marketing/cards"
import { landmarksData } from "@/constants/blog/caurser"
import { H2 } from "@/ui/typography"
import { useEffect, useRef, useState } from "react"
import {animate, motion, useAnimation} from "framer-motion"
import { StandardInfoSection } from "@/components/sections/infoSection"


export const ScrollerSection = ()=>{
    const [leftLandmark, setLeftLandmark] = useState(0)
    // const [sliceStart , setSliceStart ] = useState(0)
    // const [sliceEnd , setSliceEnd ] = useState(4)
    // const [rightLandmark, setRightLandmark] = useState(6)
    const card1Position = useRef<number>(4)
    const card2Position = useRef<number>(4)
    const card3Position = useRef<number>(4)
    const card4Position = useRef<number>(4)
    const card5Position = useRef<number>(4)
    const [firstCardLandmark , setFirstCardLandmark ] = useState<number>(0)
    const [secondCardLandmark , setSecondCardLandmark ] = useState<number>(1)
    const [thirdCardLandmark , setThirdCardLandmark ] = useState<number>(2)
    const [fourthCardLandmark , setFourthCardLandmark ]= useState<number>(3)
    const [fifthCardLandmark , setFifthCardLandmark  ]=  useState<number>(4)
    const nextLandmarkToShow = useRef<number>(5)
    const firstCardAnimation  = useAnimation()
    const secondCardAnimation = useAnimation()
    const thirdCardAnimation  = useAnimation()
    const fourthCardAnimation = useAnimation()
    const fifthCardAnimation = useAnimation()
    const sexthCardAnimation = useAnimation()
    

const increaseLandmarkToShow = ()=>{
    if (nextLandmarkToShow.current >= landmarksData.length - 1){
        nextLandmarkToShow.current = 0
    }
    else nextLandmarkToShow.current += 1
}

const cardsPositions  = [
"-96vw" , 
"-72vw" ,  "-48vw" ,
"-24vw" ,  "0vw" ,
"24vw" , "48vw" ,
"72vw" , "96vw" ,
'121vw']
    // let cardToGoLeft = 5
    // const [cardsPositionsIndex , setCardsPositionsIndex ] = useState<{card1 : number , card2 : number , card3 : number , card4 : number , card5 : number , card6 : number }>({card1: 4 , card2 : 4 , card3 : 4 , card4 : 4, card5 : 4 , card6 : 4  })

    // const rightCardAnimation = useAnimation()
    const longSliderAnimation = useAnimation()

const scrollLandmarks =   ()=>{
    firstCardAnimation.start({x : cardsPositions[card1Position.current + 1] , transition : {duration  : 1 , ease : "easeIn" } }).then(()=>{
        if(card1Position.current +1 === 9 ){
            card1Position.current  = 4
            firstCardAnimation.set({x: 0})
            setFirstCardLandmark(nextLandmarkToShow.current)
            increaseLandmarkToShow()
        }
        else{
          card1Position.current += 1
        }
    })
    secondCardAnimation.start({x : cardsPositions[card2Position.current + 1] , transition : {duration  : 1, ease : "easeIn" } } ).then(()=>{
        if(card2Position.current +1 === 8){
            card2Position.current =  3
            secondCardAnimation.set({x: "-25vw" })
            setSecondCardLandmark(nextLandmarkToShow.current)
            increaseLandmarkToShow()

        }
        else card2Position.current += 1 ;
    })
    thirdCardAnimation.start({x: cardsPositions[card3Position.current + 1], transition : {duration  : 1, ease : "easeIn" } }).then(()=>{
        if(card3Position.current + 1 === 7 ){
            card3Position.current =  2
            thirdCardAnimation.set({x: "-50vw" })
            setThirdCardLandmark(nextLandmarkToShow.current)
            increaseLandmarkToShow()

        }
        else card3Position.current +=1 
    })
    fourthCardAnimation.start({x: cardsPositions[card4Position.current + 1], transition : {duration  : 1, ease : "easeIn" }  }).then(()=>{
        if((Number(card4Position.current + 1)) ==6){
            card4Position.current  = 1
            fourthCardAnimation.set({x: "-75vw" })
            setFourthCardLandmark(nextLandmarkToShow.current)
            increaseLandmarkToShow()

        }
        else { 
        card4Position.current += 1 ;
         }

    })
    fifthCardAnimation.start({x:  cardsPositions[card5Position.current   + 1 ], transition : {duration  : 1, ease : "easeIn" } }).then(()=>{
        if(card5Position.current + 1 === 5){
            card5Position.current = 0
            fifthCardAnimation.set({x: "-100vw"})
            setFifthCardLandmark(nextLandmarkToShow.current)
            increaseLandmarkToShow()

        }
        else card5Position.current += 1
    })
}

useEffect(()=>{

const scrollIntervalId  = setInterval(scrollLandmarks , 5000 )
return ()=>{
    clearInterval(scrollIntervalId)
}
} , [])


return    <div className="flex w-fit gap-7 py-6 flex-col" >
    <div className="flex flex-col gap-3" >
   <div>

   </div>
   <StandardInfoSection className="mx-14 my-9" title="Landmark Odyssey, Immerse Yourself in the Cultural Tapestry of City Icons" descreption="embark on a cultural voyage through city icons. Our curated guide unveils the world's most renowned landmarks, offering immersive insights into history, art, and architecture across diverse global destinations." />
   <div style={{ paddingLeft : "4vw", gap : "4vw" , transform : "translateX(-25vw)"}} className="flex  items-center justify-center  w-fit" >
    <motion.div className="cursor-cell" initial={{x : 0 ,rotate:0 }} whileHover={{ rotate: [2 , -7  , 10  , -7 , 2  ,0] }} transition={{duration : 1}} animate={firstCardAnimation} > <LandmarkCard key={landmarksData[firstCardLandmark].image} landmarkData={landmarksData[firstCardLandmark]} /></motion.div>
    <motion.div className="cursor-cell" initial={{x : 0 , rotate : 0 }} whileHover={{ rotate: [2 , -7  , 10  , -7 , 2  ,0] }} transition={{duration : 1}} animate={secondCardAnimation} ><LandmarkCard key={landmarksData[secondCardLandmark].image} landmarkData={landmarksData[secondCardLandmark]} /> </motion.div>
    <motion.div className="cursor-cell" initial={{x : 0 , rotate : 0}} whileHover={{ rotate: [2 , -7  , 10  , -7 , 2  ,0] }} transition={{duration : 1}} animate={thirdCardAnimation} ><LandmarkCard key={landmarksData[thirdCardLandmark].image} landmarkData={landmarksData[thirdCardLandmark]} /></motion.div>
    <motion.div className="cursor-cell" initial={{x : 0 , rotate : 0}} whileHover={{ rotate: [2 , -7  , 10  , -7 , 2  ,0] }} transition={{duration : 1}} animate={fourthCardAnimation}><LandmarkCard key={landmarksData[fourthCardLandmark].image} landmarkData={landmarksData[fourthCardLandmark]} /></motion.div>
    <motion.div className="cursor-cell" initial={{x : 0 , rotate : 0}} whileHover={{ rotate: [2 , -7  , 10  , -7 , 2  ,0] }} transition={{duration : 1}} animate={fifthCardAnimation} ><LandmarkCard key={landmarksData[fifthCardLandmark].image} landmarkData={landmarksData[fifthCardLandmark]} /></motion.div>
   </div>
    </div>
    </div>
} 