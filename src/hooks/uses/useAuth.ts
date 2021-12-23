import React from "react";
import UserInterface from "../interfaces/UserInterface";

export default function useAuth(initialState: UserInterface) {
  const [user, setUser] = React.useState(initialState);

  return { user, setUser };
}
