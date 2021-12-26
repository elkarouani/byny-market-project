import React, { createContext } from "react";
import servicesInitialState from "../initials/ServicesInitialState";
import useStore from "../uses/useStore";

interface ServicesContextProviderProps {
  children: React.ReactNode;
}

export const ServicesContext = createContext(servicesInitialState);

const ServicesContextProvider = ({ children }: ServicesContextProviderProps) => {
  const { servicesState, servicesContextActions } = useStore();

  const providerValue = {
    ...servicesState,
    ...servicesContextActions,
  };

  return (
    <ServicesContext.Provider value={providerValue}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;
