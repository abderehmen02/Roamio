
"use client"

import { PrimaryBtn } from "@/ui/buttons";
import { PrimaryInput } from "@/ui/input";
import { Title } from "@/ui/title";
import { P } from "@/ui/typography";
import { InputBase, TextField } from "@mui/material";
import { useState } from "react";

export default function ContactPage (){
const [message, setMessage] = useState<string>("")
const [name, setname] = useState<string>("")
const [email, setEmail] = useState<string>("")

return <div className="flex flex-col items-center gap-12 justify-center min-h-screen">
<Title title="Contact Us" descreption="Have a proplem? leave us a message and we will get back to you asap" />
<form className="flex gap-11 rounded-lg px-24 py-11 flex-col shadow-lg bg-white" >
<PrimaryInput className="w-[550px]" label="name" />
<PrimaryInput className="w-[550px]"  label="email" type="email" required />
<TextField  label="message" placeholder="Type your message" variant="filled" multiline maxRows={5} minRows={3} />
<PrimaryBtn type="submit"  className="flex items-center justify-center gap-2"><P>Send</P><i className="bi bi-send"></i></PrimaryBtn>
</form>
    </div>
}