import ActionButton from "@/components/UI/MyButtons/ActionButton";
import SocialButton from "@/components/UI/MyButtons/SocialButton";
import SimpleInput from "@/components/UI/MyInputs/SimpleInput";
import HeadlessLayout from "@/layouts/HeadlessLayout";

export default function SignUpPage() {
  return (
    <div className="px-12 pb-4">
      <HeadlessLayout.PageTitle title="Sign Up" />
      <form action="#" className="auth-page__form">
        <div className="space-y-6">
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
          <SimpleInput 
            id="ConfirmPasswordInput"
            label="Confirm password :"
            placeholder="••••••••"
          />
        </div>
        <ActionButton
          label="Connect"
        />
      </form>
      <hr className="mt-10 mb-6" />
      <div className="flex justify-around">
        <SocialButton socialApp="google" />
        <SocialButton socialApp="linkedin" />
        <SocialButton socialApp="twitter" />
      </div>
    </div>
  );
}