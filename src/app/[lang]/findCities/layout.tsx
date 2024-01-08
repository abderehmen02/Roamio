import { Footer } from "@/components/layout/footer";
import { UnlogedHeader } from "@/components/layout/unlogedHeader";
import React from "react";

export default function BlogLayout ({children} : {children: React.ReactNode} ){
    return  <div   className="flex  relative items-center justify-center w-full px-0 flex-col  laptop:gap-4 pt-14 laptop:pt-32" >
    <UnlogedHeader/>
{children}
<Footer/>
</div>
}