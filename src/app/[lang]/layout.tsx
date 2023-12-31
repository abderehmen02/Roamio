import './globals.css'
import type { Metadata } from 'next'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { StateProvider } from '@/providers/stateProvider'
import { AuthProvider } from '@/providers/userProvider'
import { TanstackProvider } from '@/providers/tanstackProvider'
import { ToosterProvider } from '@/providers/toosterProvider'
import { cn } from '@/lib/tailwind'
import { monsterrat } from '@/ui/typography'



export const metadata : Metadata = {
  title : 'Roamio' ,
  description : 'Find your target destination' ,
  openGraph  : {
    images : '/logo.ico'
  }
}




export async function  generateStaticParams() {
  return languages.map((lng) => ({ lng }))
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
      <body className={cn(monsterrat.variable ,'bgBackground relative w-full flex items-center justify-center' )} >   <TanstackProvider>
         <StateProvider>   
          <ToosterProvider>
        <div    className=' flex w-full   items-center justify-center   relative'>{children}</div>    
        </ToosterProvider>
        </StateProvider></TanstackProvider>
      </body>
    </html>
  )
}
