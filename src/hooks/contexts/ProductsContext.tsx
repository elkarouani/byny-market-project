import React, { createContext } from "react";
import Product from "../entities/Product";
import ProductsInterface from "../interfaces/ProductsInterface";
import useStore from "../uses/useStore";

interface ProductsContextProviderProps {
  children: React.ReactNode;
}

const productsInitialState: ProductsInterface = {
  allProducts: [new Product()],
};
export const ProductsContext = createContext(productsInitialState);

const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const { productsState, loadAllProducts } = useStore();

  const providerValue = {
    ...productsState,
    loadAllProducts,
  };

  return (
    <ProductsContext.Provider value={providerValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
