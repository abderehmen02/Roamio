import { LoggedPage, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";
import { Cities } from "../dashboard/_components/cities";
import { SavedCities } from "./_components/savedCities";


export default function SavedCitiesPage (){
    return <LoggedPage>
        <Title title="Your Cities" descreption="Your Collection of Treasured Destinations." />
     <PageBody>   <SavedCities/></PageBody>
    </LoggedPage>
}