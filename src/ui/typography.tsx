import { cn } from '@/lib/tailwind';
import { Montserrat } from 'next/font/google'
import { HTMLAttributes } from 'react';


const montserrat = Montserrat({
        subsets : ["latin"] ,
        weight : '500'
      })

const montserratClassName = montserrat.className
export const H1 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
return <h1 className={cn("text-5xl "  , montserratClassName , className)}  {...props} >
{children}
</h1>
}
    
export const H2 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
  return <h1 className={cn("text-4xl font-semibold "  , montserratClassName , className)}  {...props} >
  {children}
  </h1>
  }


export const H3 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
    return <h1 className={cn("text-3xl font-bold "  , montserratClassName , className)}  {...props} >
    {children}
    </h1>
    }

export const H4 : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
      return <h1 className={cn("text-xl font-bold "  , montserratClassName , className)}  {...props} >
      {children}
      </h1>
      }

export const P : React.FC<HTMLAttributes<HTMLHeadElement>> = ({children , className   , ...props}  ) =>{
        return <h1 className={cn("font-bold "  , montserratClassName , className)}  {...props} >
        {children}
        </h1>
        }
  