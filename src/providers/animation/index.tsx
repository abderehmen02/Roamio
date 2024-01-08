"use client"

import { appVariants } from "@/constants/blog/animation/framerVariants"
import {HTMLMotionProps, motion} from "framer-motion"
import React from "react"


type DisplayAnimationProps  =  {children : React.ReactNode , 
    delay?  :number ,
    className? : string ,
} 

export const DisplayAnimation : React.FC<DisplayAnimationProps> = ({children , delay , className })=>{
return    <motion.div variants={appVariants } transition={{   type : "spring" , delay  }}  initial="beforeDisplay" animate="display" className={className} >
{children}
    </motion.div>
}

