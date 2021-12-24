import UserInterface from "../interfaces/UserInterface";

const authenticate = (state: UserInterface, email: string) => {
  let updatedState = { ...state };
  updatedState.user.email = email;
  updatedState.user.isAuthenticated = true;
  return updatedState;
}

export default function authReducer(state: UserInterface, action: any) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        ...authenticate(state, action.payload),
      };
    case "SIGN_UP":
      return {
        ...state,
        ...authenticate(state, action.payload),
      };
    default:
      return state;
  }
}
