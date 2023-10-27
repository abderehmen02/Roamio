import React from 'react'
import { UnlogedHeader } from '@/components/layout/unlogedHeader'
import { Footer } from '../../../components/layout/footer'



export default function Layout ({children} : {children : React.ReactNode}){
return <div  className="flex  items-center py-4 laptop:py-0 justify-center w-full px-0 flex-col  gap-20" >
<UnlogedHeader/>
{children}
<Footer/>
</div>
}