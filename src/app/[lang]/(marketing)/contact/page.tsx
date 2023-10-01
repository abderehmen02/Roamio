"use client"

import { PrimaryBtn } from "@/ui/buttons";
import { PrimaryInput } from "@/ui/input";
import { Title } from "@/ui/title";
import { P } from "@/ui/typography";
import { InputBase } from "@mui/material";

export default function ContactPage (){
    return <div className="flex flex-col items-center justify-center h-screen">
<Title title="Contact Us" descreption="Have a proplem? leave us a message and we will get back to you asap" />
<form className="flex gap-11 rounded-lg px-24 py-11 flex-col  bg-white" >
<PrimaryInput className="w-[550px]" label="name" />
<PrimaryInput className="w-[550px]"  label="email" type="email" required />
<PrimaryInput label="message" multiple />
<PrimaryBtn type="submit"  className="flex items-center justify-center gap-2"><P>Send</P><i className="bi bi-send"></i></PrimaryBtn>
</form>
    </div>
}