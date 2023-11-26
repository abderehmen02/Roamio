"use client"

import { appVariants } from "@/constants/blog/animation/framerVariants"
import {motion} from "framer-motion"
import React from "react"




export const DisplayAnimation : React.FC<{children : React.ReactNode , delay?  :number }> = ({children , delay })=>{
return    <motion.div variants={appVariants } transition={{ease : "linear"  , type : "spring" , delay  }}  initial="beforeDisplay" animate="display" >
{children}
    </motion.div>
}

