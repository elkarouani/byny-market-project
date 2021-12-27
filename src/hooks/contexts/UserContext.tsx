import { createContext } from "react";
import userInitialState from "../initials/UserInitialState";
import useAuth from "../uses/useAuth";

export const UserContext = createContext(userInitialState);

const UserContextProvider: React.FunctionComponent = ({ children }) => {
  const { userState, signIn } = useAuth(userInitialState);

  return (
    <UserContext.Provider value={userState}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
