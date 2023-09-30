import { useTranslation } from "@/app/i18n"
import { P } from "@/ui/typography"

export const Footer : React.FC  = async ()=>{
   const {t} = await useTranslation()
    const footerItems : string[][] = [ [
    t("footer.home") ,
    t("footer.exploreCites") ,
    t("footer.blog")  ],
    [
    t("footer.termsOfUse")  ,
    t("footer.contactUs")  ,
    t("footer.privacyPolicy") ]
    ]
    
    return <footer className="flex  w-full items-center  border-t-2 border-black bg-white justify-center px-16 py-9" >
{
    footerItems.map(row=>{
        return <div style={{width : '100%'}} className="flex   flex-col w-full items-start gap-2" >
            {
                row.map((item=><P className="capitalize " >{item}</P>))
            }
        </div>
    })
}
    </footer>
}