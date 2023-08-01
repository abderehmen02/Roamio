import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { IconInput, PrimaryInput } from "@/ui/input"
import { H3 } from "@/ui/typography"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"



export  const  UnlogedHeader = ()=>{
    return(
        <div className="flex w-full items-center justify-around border-4 border-red-500" >
<img src="/logo-color.png" className="w-16 h-16" />
<div className="max-w-3xl " ><IconInput Icon={<i className="bi bi-search "></i>} placeholder="search..." /></div>
<Link href="/blog" > <H3 className="text-primary drop-shadow-xl" > Blog </H3></Link>
<Link href="/explore" ><H3 className="text-primary drop-shadow-xl" > Explore </H3></Link>
<Link href="/login" > <PrimaryBtn>Sign In <i className="bi bi-person"></i> </PrimaryBtn></Link>
<Link href="/signUp" > <SecondaryBtn>Sign Up <i className="bi bi-person-add"></i> </SecondaryBtn></Link>
        </div>
    )
}