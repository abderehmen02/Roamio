"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';



export const TypeAnimationProvider   : React.FC<{text : string[] , duration? : number }>  = ({text , duration})=>{
    const textSuquence : (number | string )[]= []
    text.forEach(item=>{
        textSuquence.push(item)
        textSuquence.push(duration || 10000)
    })
    return <TypeAnimation sequence={textSuquence}  wrapper="span"
    speed={50}
    omitDeletionAnimation={true}
    style={{  display: 'inline-block' }}
    repeat={1} ></TypeAnimation>
}