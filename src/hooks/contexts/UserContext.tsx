import React, { createContext } from "react";
import User from "../entities/User";
import useAuth from "../uses/useAuth";

interface UserContextProviderProps {
    children: React.ReactNode;
}

const userInitialState = {
  isAuthenticated: false,
  user: new User('elkarouani@gmail.com'),
  loading: true,
  error: new Error(),
};
export const UserContext = createContext(userInitialState);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const {user, setUser} = useAuth(userInitialState);

  return (
    <UserContext.Provider value={{...user}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
