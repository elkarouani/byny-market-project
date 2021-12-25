import HeadlessLayout from "@/layouts/HeadlessLayout";
import { useContext } from "react";
import { UserContext } from "../../hooks/contexts/UserContext";

export default function SignInPage() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div>
      <HeadlessLayout.PageTitle title="Sign In" />
      {/* <form action="#">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Sign In</button>
      </form> */}
    </div>
  );
}