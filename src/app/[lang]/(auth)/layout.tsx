import React from 'react'
import { UnlogedHeader } from '@/components/layout/unlogedHeader'
import { Footer } from '../(marketing)/_components/footer'



export default function Layout ({children} : {children : React.ReactNode}){
return <div  className="flex  w-full px-0 flex-col  gap-20" >
<UnlogedHeader/>
{children}
<Footer/>
</div>
}