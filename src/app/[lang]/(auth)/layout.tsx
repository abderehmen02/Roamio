import React, { memo } from 'react'
import { UnlogedHeader } from '@/components/layout/unlogedHeader'
import { Footer } from '../../../components/layout/footer'



export default function Layout ({children} : {children : React.ReactNode}){
return <div  className="flex  items-center  laptop:pt-32 justify-center w-full px-0 flex-col  gap-20" >
<UnlogedHeader/>
{children}
<Footer/>
</div>
}

const Card = ()=><div></div>















                      const MemoizedCard = memo(Card)
                      function App(){
                        return <MemoizedCard/>
                      }