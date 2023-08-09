import { SignUpCards } from "./_components/cards";
import { SignUpForm } from "./_components/signUpForm";

export  default  function SignUpPage(){
    return <div  className="flex items-center flex-col" >
        <div className="bg-secondaryDark relativ w-fit e items-center p-16 rounded-xl gap-10 justify-center flex" >
     <SignUpForm/>
            <SignUpCards/>
        </div>
    </div>
}