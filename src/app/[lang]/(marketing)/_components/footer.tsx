import { useTranslation } from "@/app/i18n"
import { appConfig } from "@/config"
import { P } from "@/ui/typography"

export const Footer : React.FC  = async ()=>{
   const {t} = await useTranslation()
    const footerItems : {name: string , link : string}[][] = [ [
{  link : appConfig.links.home, name :  t("footer.home")  },
{  link : appConfig.links.findCities  ,name :  t("footer.exploreCites") },
{  link: appConfig.links.blog , name :   t("footer.blog") } ],
    [
{ name :   t("footer.termsOfUse") , link : appConfig.links.termsOfUse } ,
{ name :   t("footer.contactUs")  , link : appConfig.links.contact  } ,
{ name :   t("footer.privacyPolicy") , link : appConfig.links.primacyPolicy }]
    ]
    
    return <footer className="flex  w-full items-center  border-t-2 border-black bg-white justify-center px-16 py-9" >
{
    footerItems.map(row=>{
        return <div style={{width : '100%'}} className="flex   flex-col w-full items-start gap-2" >
            {
                row.map((item=><a href={item.link} ><P className="capitalize " >{item.name}</P></a>))
            }
        </div>
    })
}
    </footer>
}