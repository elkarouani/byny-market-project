import React, { createContext } from "react";
import userInitialState from "../initials/UserInitialState";
import useAuth from "../uses/useAuth";

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext(userInitialState);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const { userState, signIn } = useAuth(userInitialState);

  return (
    <UserContext.Provider value={userState}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
