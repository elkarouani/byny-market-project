import { createContext, useContext } from "react";
import servicesInitialState from "../initials/ServicesInitialState";
import ServicesInterface from "../interfaces/SevicesInterface";
import useStore from "../uses/useStore";

const ServicesContext = createContext<ServicesInterface>(servicesInitialState);

export const useAllServices = (): ServicesInterface['allServices'] =>
  useContext(ServicesContext).allServices;

export const useLoadAllServices = (): ServicesInterface['loadAllServices'] =>
  useContext(ServicesContext).loadAllServices;

const ServicesContextProvider: React.FunctionComponent = ({ children }) => {
  const { services, servicesContextActions } = useStore();

  return (
    <ServicesContext.Provider value={{
      ...services,
      loadAllServices: servicesContextActions?.loadAllServices,
    }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;
