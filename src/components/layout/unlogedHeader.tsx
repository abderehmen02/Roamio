import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
import { H3 } from "@/ui/typography"
import Link from "next/link"

export  const  UnlogedHeader = ()=>{
    return(
        <div className="" >
<img src="/logo-color.png" className="w-48 h-48" />
<input className="w-40" />
<Link href="/blog" > <H3 className="text-primary" > Blog </H3></Link>
<Link href="/explore" > <H3 className="text-primary" > Explore </H3></Link>
<Link href="/login" > <PrimaryBtn>Sign In <i className="bi bi-person"></i> </PrimaryBtn></Link>
<Link href="/signUp" > <SecondaryBtn>Sign Up <i className="bi bi-person-add"></i> </SecondaryBtn></Link>
        </div>
    )
}