import UserInterface from "../interfaces/UserInterface";

export default function authReducer(state: UserInterface, action: any) {
  switch (action.type) {
    case "SIGN_IN":
			let updatedState = {...state};
			updatedState.user.email = action.payload;
			updatedState.user.isAuthenticated = true;

			return {
        ...state,
        ...updatedState,
      };
    default:
      return state;
  }
}
