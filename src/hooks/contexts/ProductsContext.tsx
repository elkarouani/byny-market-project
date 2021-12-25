import React, { createContext } from "react";
import productsInitialState from "../initials/ProductsInitialState";
import useStore from "../uses/useStore";

interface ProductsContextProviderProps {
  children: React.ReactNode;
}

export const ProductsContext = createContext(productsInitialState);

const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const { productsState, productsContextActions } = useStore();

  const providerValue = {
    ...productsState,
    ...productsContextActions,
  };

  return (
    <ProductsContext.Provider value={providerValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
