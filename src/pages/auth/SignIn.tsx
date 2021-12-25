import ActionButton from "@/components/UI/MyButtons/ActionButton";
import SimpleInput from "@/components/UI/MyInputs/SimpleInput";
import HeadlessLayout from "@/layouts/HeadlessLayout";
import { useContext } from "react";
import { UserContext } from "../../hooks/contexts/UserContext";

export default function SignInPage() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div>
      <HeadlessLayout.PageTitle title="Sign In" />
      {/* <SimpleInput 
        id="EmailInput"
        label="Email Address :"
        placeholder="ex: john@mail.com"
      /> */}
      <ActionButton 
        label="Connect"
      />
    </div>
  );
}