import { BLogHeader } from "@/components/layout/blogHeader";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { UnlogedHeader } from "@/components/layout/unlogedHeader";
import React from "react";


export default function BlogLayout ({children} : {children: React.ReactNode} ){
    
    return  <div  className="flex pt-16   w-full items-center justify-center  px-0 py-12  laptop:pt-28 laptop:pb-0  flex-col  gap-4" >
    <BLogHeader/>
{children}
<Footer/>
</div>
}