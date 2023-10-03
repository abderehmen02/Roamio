import { blogPageDescreptions } from "@/config/blog";
import { Page, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";

export default function BLogPage (){
return     <Page>
        <  >
        <Title title="Roamio Blog" descreption={blogPageDescreptions[ Math.floor( Math.random() * 6 )]} />
            
        </PageBody>
    </Page>
}