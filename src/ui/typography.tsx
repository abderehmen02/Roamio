import { cn } from '@/lib/tailwind';
import { Rubik } from 'next/font/google'
import { HTMLAttributes } from 'react';


const rubic = Rubik({
        subsets : ["latin"] ,
        weight : '400'
      })

export  const montserratClassName = rubic.className
export const H1 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
return <h1 className={cn("text-4xl "  , montserratClassName , className)}  {...props} >
{children}
</h1>
}
    
export const H2 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
  return <h2 style={{fontWeight : 500}} className={cn("text-3xl  "  , montserratClassName , className)}  {...props} >
  {children}
  </h2>
  }


export const H3 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
    return <h3  className={cn("text-xl   "  , montserratClassName , className)}  {...props} >
    {children}
    </h3>
    }

export const H4 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
      return <h4 className={cn("text-lg font-bold "  , montserratClassName , className)}  {...props} >
      {children}
      </h4>
      }

export const P : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
        return <p className={cn(   montserratClassName , className)}  {...props} >
        {children}
        </p>
        }

export const Text : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
          return <div className={cn(   montserratClassName , className)}  {...props} >
          {children}
          </div>
          }
  