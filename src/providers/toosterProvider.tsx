import React from "react"
import {Toaster} from "sonner"



export const ToosterProvider : React.FC<{children : React.ReactNode}> = ({children})=>{
    return <div>
<Toaster/>
{children}
    </div>
}