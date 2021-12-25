import React, { createContext } from "react";
import Product from "../entities/Product";
import useStore from "../uses/useStore";

interface ProductsContextProviderProps {
  children: React.ReactNode;
}

const productsInitialState = {
  products: [new Product()],
};
export const ProductsContext = createContext(productsInitialState);

const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const { storeState } = useStore(productsInitialState);

  return (
    <ProductsContext.Provider value={storeState}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
