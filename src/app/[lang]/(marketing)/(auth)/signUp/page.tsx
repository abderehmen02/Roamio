import { SignUpCards } from "./_components/cards";
import { SignUpForm } from "./_components/signUpForm";

export  default  function SignUpPage(){
    return <div  className="flex items-center flex-col" >
        <div className="bg-secondary relativ w-fit e items-center px-32 py-12 gap-10 justify-center flex" >
     <SignUpForm/>
            <SignUpCards/>
        </div>
    </div>
}