import ActionButton from "@/components/UI/MyButtons/ActionButton";
import SocialButton from "@/components/UI/MyButtons/SocialButton";
import SimpleInput from "@/components/UI/MyInputs/SimpleInput";
import HeadlessLayout from "@/layouts/HeadlessLayout";
import { useContext } from "react";
import { UserContext } from "../../hooks/contexts/UserContext";

export default function SignInPage() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div className="px-12">
      <HeadlessLayout.PageTitle title="Sign In" />
      <form action="#" className="signin-page__form">
        <div className="space-y-8">
          <SimpleInput 
            id="EmailInput"
            label="Email Address :"
            placeholder="ex: john@mail.com"
          />
          <SimpleInput 
            id="PasswordInput"
            label="Password :"
            placeholder="••••••••"
          />
        </div>
        <ActionButton
          label="Connect"
        />
      </form>
      <hr className="mt-16 mb-6" />
      <div className="flex justify-around">
        <SocialButton socialApp="google" />
        <SocialButton socialApp="linkedin" />
        <SocialButton socialApp="twitter" />
      </div>
    </div>
  );
}