import { blogPageDescreptions } from "@/config/blog";
import { PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";

export default function BLogPage (){
return <div>
    <PageBody>
        <Title title="Roamio Blog" descreption={blogPageDescreptions[ Math.floor( Math.random() * 6 )]} />
    </PageBody>
</div>
}