import './globals.css'
import type { Metadata } from 'next'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { StateProvider } from '@/providers/stateProvider'
import { AuthProvider } from '@/providers/userProvider'
import { TanstackProvider } from '@/providers/tanstackProvider'




export async function  generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params  : {lang},
}: {
  children: React.ReactNode ,
  params :{
    lang : string
  } ,
}) {

  return (
    <html lang={lang} dir={dir(lang)} >
      <body >   <TanstackProvider>
         <StateProvider>   
            {children}
        </StateProvider></TanstackProvider>
      </body>
    </html>
  )
}
