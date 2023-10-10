import { Page } from "@/ui/containers";
import { LoginForm } from "./_components/loginForm";

export default  function  Login (){
    return <div className="flex " >        
    <Page className="w-full " >
    <LoginForm/>
    </Page>
</div>
}