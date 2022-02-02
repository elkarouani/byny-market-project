import { useReducer } from "react";
import UserInterface from "../interfaces/UserInterface";
import authReducer from "../reducers/authReducer";

export default function useAuth(initialState: UserInterface) {
  const [userState, authDispatch] = useReducer(authReducer, initialState);

  return { 
    userState,
    signIn: (email: string) => authDispatch({ type: "SIGN_IN", payload: email }),
    signUp: (email: string) => authDispatch({ type: "SIGN_UP", payload: email }),
  };
}
