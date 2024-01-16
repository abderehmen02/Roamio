import { useTranslation as translate } from "@/app/i18n"
import { appConfig } from "@/config"
import { H2, H3, H4, P } from "@/ui/typography"
import Link from "next/link"
import React from "react"

export const PrevFooter : React.FC  = async ()=>{
   const {t} = await translate()
    const footerItems : {name: string , link : string}[][] = [ [
{  link : appConfig.links.home, name :  t("footer.home")  },
{  link : appConfig.links.findCities  ,name :  "explore cities" },
{  link: appConfig.links.blog , name :   t("footer.blog") } ],
    [
{ name :   t("footer.termsOfUse") , link : appConfig.links.termsOfUse } ,
{ name :   t("footer.contactUs")  , link : appConfig.links.contact  } ,
{ name :   t("footer.privacyPolicy") , link : appConfig.links.primacyPolicy }]
    ]
    
    return <footer  className="flex w-full items-center  border-t-2 border-black  justify-center px-5 py-9" >
{
    footerItems.map((row , index )=>{
        return <div key={index} style={{width : '100%'}} className="flex  w-fit flex-col  items-start gap-2" >
            {
                row.map((item=><a key={item.link} href={item.link} ><P  className="capitalize " >{item.name}</P></a>))
            }
        </div>
    })
}
    </footer>
}




export const Footer : React.FC = async ()=>{
    return <footer className="relative w-full h-fit text-white px-1 py-4 laptop:py-7 laptop:px-32 gap-8 flex flex-col items-center " >
<img src="/compresedCities/footerBg.jpg" className="w-full h-full  absolute top-0 left-0" />
<div className="heroOverlay w-full h-full bg-opacity-40 absolute top-0 left-0" ></div>

    <div  className="flex relative z-30 items-center    justify-between w-full" >
<div className="flex  items-center gap-2 laptop:gap-4" >
<img src={appConfig.logoImage} className="w-[40px] h-[40px] laptop:w-[70px]  laptop:h-[70px] border-2 border-black object-cover p-0 rounded-full" />
<H2 className="text-xl"  >{appConfig.name}</H2>
</div>
<a href={`mailto:${appConfig.email}`} className="flex mr-3 laptop:mr-0  gap-3 items-center" >
<i className="bi text-3xl font-bold bi-envelope"></i>
<H4 className="font-bold" >Email</H4>
</a>
    </div>
    <div className="relative z-30 flex w-full items-start  justify-between laptop:justify-start" >
    <div className="gap-2 w-fit laptop:w-1/2 flex flex-col" >
    <Link className="monsterrat " href={appConfig.links.home} ><H4>Home</H4></Link>
    <Link className="monsterrat" href={appConfig.links.blog} ><H4>Blog</H4></Link>
    <Link className="monsterrat" href={appConfig.links.findCities} ><H4>Find Cities </H4></Link>        
    </div>


    <div className="gap-2 w-fit  laptop:w-1/2 flex flex-col" >
    <Link className="monsterrat " href={appConfig.links.termsOfUse} ><H4>Terms Of Use</H4></Link>
    <Link className="monsterrat" href={appConfig.links.primacyPolicy} ><H4>Privacy Policy</H4></Link>
    <Link className="monsterrat" href={appConfig.links.contact} ><H4>Contact Us <i className="bi text-xl bi-telephone-fill"></i> </H4></Link>        
    </div>
    </div>
    <div className="flex flex-col laptop:flex-row w-full relative z-30 items-start laptop:items-center justify-between" >
    <P>Copyright All Rights Reserved 2023 </P>
    <P>Email : {appConfig.email}</P>
    <P>Designed By Abde Rehmen</P>
    </div>
    </footer>
}