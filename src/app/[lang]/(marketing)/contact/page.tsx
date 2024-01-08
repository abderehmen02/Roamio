
"use client"

import { BLogHeader } from "@/components/layout/blogHeader";
import { PrimaryBtn } from "@/ui/buttons";
import { Page } from "@/ui/containers";
import { PrimaryInput } from "@/ui/input";
import { Title } from "@/ui/title";
import { H3, H4, P } from "@/ui/typography";
import { InputBase, TextField } from "@mui/material";
import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function ContactPage (){
const [message, setMessage] = useState<string>("")
const [name, setName] = useState<string>("")
const [email, setEmail] = useState<string>("")
const [sendingMessage, setSendingMessage] = useState<boolean>(false)
const [messageSent, setMessageSent] = useState<boolean>(false)
const [messageError, setMessageError] = useState(false)

const clearValues = ():void=>{
    setName("")
    setEmail("")
    setMessage("")
}

const clearMessages = ():void=>{
    setMessageSent(false)
   setMessageError(false)
}

const sendContactMessage = async (e: FormEvent<HTMLFormElement>) : Promise<void> =>{
    e.preventDefault()
    setSendingMessage(true)
    const res = await axios.post("/api/contact" , {
        message , 
        name , 
        email
    })
    setSendingMessage(false)
    if(res.status !== StatusCodes.CREATED) return  setMessageError(true)
    setMessageSent(true) 
    clearValues()
    toast.success("Message sent!")
    setTimeout(clearMessages , 5000)
}


return <Page className="w-full flex items-center justify-center " >
<BLogHeader/>
<Title title="Contact Us" descreption="Have a proplem? leave us a message and we will get back to you asap" />
<form onSubmit={sendContactMessage} className="flex w-full  gap-11 rounded-lg px-5 laptop:px-24 py-11 flex-col shadow-lg bg-white" >
{messageSent ?   <H4 className="text-green-600 w-full text-center" >Your message has been sent!</H4> : (messageError ? <H4 className="text-red-600 w-full text-center " >Some Error Hapened! please try again</H4> : null ) }
<PrimaryInput value={name} onChange={(e)=>setName(e.target.value)} className="w-full   " label="name" />
<PrimaryInput value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full  "  label="email" type="email" required />
<TextField  value={message} onChange={(e)=>setMessage(e.target.value)} label="message" placeholder="Type your message" variant="filled" multiline maxRows={5} minRows={3} />
<PrimaryBtn loading={sendingMessage} disabled={sendingMessage} type="submit"  className="flex items-center justify-center gap-2"><P>Send</P>{ !sendingMessage&&  <i className="bi bi-send"></i>}</PrimaryBtn>
</form>
    </Page>
}