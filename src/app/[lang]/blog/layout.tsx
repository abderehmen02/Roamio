import { Footer } from "@/components/layout/footer";
import { UnlogedHeader } from "@/components/layout/unlogedHeader";
import React from "react";

export default function BlogLayout ({children} : {children: React.ReactNode} ){
    return  <div  className="flex  w-full items-center justify-center px-0 flex-col  gap-4" >
    <UnlogedHeader/>

{children}
<Footer/>
</div>
}