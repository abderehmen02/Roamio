import { useTranslation as translate } from "@/app/i18n"
import { appConfig } from "@/config"
import { P } from "@/ui/typography"

export const Footer : React.FC  = async ()=>{
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