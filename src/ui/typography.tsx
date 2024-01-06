import { cn } from '@/lib/tailwind';
import { Montserrat } from 'next/font/google'
import { HTMLAttributes } from 'react';





export const monsterrat = Montserrat({
  subsets : ["latin"] ,
  weight : ['400' , '600' , '700'] ,
  variable : '--monsterrat' , 
})


export  const montserratClassName = monsterrat
export const semiboldMontserratClassName = "" 
export const boldMontserratClassName= ""



export const H1 : React.FC<HTMLAttributes<HTMLHeadElement>  > = ({children   , className   , ...props}  ) =>{
return <h1 className={cn("text-4xl    laptop:font-semibold "  ,montserratClassName , className)}  {...props} >
{children}
</h1>
} 
    
export const H2 : React.FC<HTMLAttributes<HTMLHeadElement> > = ({children , className   , ...props}  ) =>{
  return <h4  className={cn("font-semibold laptop:font-bold text-3xl  "  , montserratClassName  , className)}  {...props} >
  {children}
  </h4>
  }


export const H3 : React.FC<HTMLAttributes<HTMLHeadElement> > = ({children , className   , ...props}  ) =>{
    return <h3  className={cn("text-xl   "  ,montserratClassName  , className)}  {...props} >
    {children}
    </h3>
    }

export const H4 : React.FC<HTMLAttributes<HTMLHeadElement> > = ({children , className   , ...props}  ) =>{
      return <h4 className={cn("text-lg  "  , montserratClassName  , className)}  {...props} >
      {children}
      </h4>
      }

export const P : React.FC<HTMLAttributes<HTMLHeadElement> > = ({children , className   , ...props}  ) =>{
        return <p className={cn(  montserratClassName  , className)}  {...props} >
        {children}
        </p>
        }

export const Text : React.FC<HTMLAttributes<HTMLHeadElement> > = ({children , className   , ...props}  ) =>{
          return <div className={cn(  montserratClassName  , className)}  {...props} >
          {children}
          </div>
          }
  