import { cn } from '@/lib/tailwind';
import { Rubik } from 'next/font/google'
import { HTMLAttributes } from 'react';





const rubic = Rubik({
        subsets : ["latin"] ,
        weight : '400'
      })  


const semiboldRubic = Rubik({
        subsets : ["latin"] ,
        weight : '500'
      })  

const boldRubic = Rubik({
        subsets : ["latin"] ,
        weight : '700'
      })  





export  const montserratClassName = rubic.className
export const semiboldMontserratClassName = semiboldRubic.className
export const boldMontserratClassName= boldRubic.className

export enum FontWeights {
  BOLD  ,
  SEMIBOLD ,
  NORMAL
}

export type TypographyProps = {
fontWeight? : FontWeights ,
} 


export const H1 : React.FC<HTMLAttributes<HTMLHeadElement> & TypographyProps > = ({children , fontWeight  , className   , ...props}  ) =>{
return <h1 className={cn("text-4xl "  , {montserratClassName : !fontWeight || fontWeight === FontWeights.NORMAL , semiboldMontserratClassName  : fontWeight === FontWeights.SEMIBOLD , boldMontserratClassName : FontWeights.BOLD } , className)}  {...props} >
{children}
</h1>
}
    
export const H2 : React.FC<HTMLAttributes<HTMLHeadElement> & TypographyProps> = ({children , fontWeight, className   , ...props}  ) =>{
  return <h2 style={{fontWeight : 500}} className={cn("text-3xl  "  ,  {montserratClassName : !fontWeight || fontWeight === FontWeights.NORMAL , semiboldMontserratClassName  : fontWeight === FontWeights.SEMIBOLD , boldMontserratClassName : FontWeights.BOLD }  , className)}  {...props} >
  {children}
  </h2>
  }


export const H3 : React.FC<HTMLAttributes<HTMLHeadElement> & TypographyProps> = ({children , fontWeight, className   , ...props}  ) =>{
    return <h3  className={cn("text-xl   "  , {montserratClassName : !fontWeight || fontWeight === FontWeights.NORMAL , semiboldMontserratClassName  : fontWeight === FontWeights.SEMIBOLD , boldMontserratClassName : FontWeights.BOLD }  , className)}  {...props} >
    {children}
    </h3>
    }

export const H4 : React.FC<HTMLAttributes<HTMLHeadElement> & TypographyProps> = ({children , className  , fontWeight , ...props}  ) =>{
      return <h4 className={cn("text-lg font-bold "  ,  {montserratClassName : !fontWeight || fontWeight === FontWeights.NORMAL , semiboldMontserratClassName  : fontWeight === FontWeights.SEMIBOLD , boldMontserratClassName : FontWeights.BOLD }  , className)}  {...props} >
      {children}
      </h4>
      }

export const P : React.FC<HTMLAttributes<HTMLHeadElement> & TypographyProps> = ({children , fontWeight, className   , ...props}  ) =>{
        return <p className={cn(   {montserratClassName : !fontWeight || fontWeight === FontWeights.NORMAL , semiboldMontserratClassName  : fontWeight === FontWeights.SEMIBOLD , boldMontserratClassName : FontWeights.BOLD }  , className)}  {...props} >
        {children}
        </p>
        }

export const Text : React.FC<HTMLAttributes<HTMLHeadElement> & TypographyProps> = ({children , fontWeight, className   , ...props}  ) =>{
          return <div className={cn(   {montserratClassName : !fontWeight || fontWeight === FontWeights.NORMAL , semiboldMontserratClassName  : fontWeight === FontWeights.SEMIBOLD , boldMontserratClassName : FontWeights.BOLD }  , className)}  {...props} >
          {children}
          </div>
          }
  