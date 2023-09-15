import { LoggedPage } from "@/ui/containers";
import { Title } from "@/ui/title";
import { Cities } from "../dashboard/_components/cities";


export default function SavedCities (){
    return <LoggedPage>
        <Title title="Your Cities" descreption="Your Collection of Treasured Destinations." />
        <Cities/>
    </LoggedPage>
}