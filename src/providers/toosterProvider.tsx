import React from "react"
import {Toaster} from "sonner"



export const ToosterProvider : React.FC<{children : React.ReactNode}> = ({children})=>{
    return <div className="w-full flex items-center justify-center " >
<Toaster richColors={true} />
{children}
    </div>
}