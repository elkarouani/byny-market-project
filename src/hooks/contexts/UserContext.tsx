import React, { createContext } from "react";
import User from "../entities/User";
import useAuth from "../uses/useAuth";

interface UserContextProviderProps {
  children: React.ReactNode;
}

const userInitialState = {
  user: new User('elkarouani@gmail.com'),
};
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
