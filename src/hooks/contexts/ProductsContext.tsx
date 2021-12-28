import { createContext, useContext } from "react";
import productsInitialState from "../initials/ProductsInitialState";
import ProductsInterface from "../interfaces/ProductsInterface";
import useStore from "../uses/useStore";

const ProductsContext = createContext<ProductsInterface>(productsInitialState);

export const useAllProducts = (): ProductsInterface['allProducts'] =>
  useContext(ProductsContext).allProducts;

export const useNewProducts = (): ProductsInterface['newProducts'] =>
  useContext(ProductsContext).newProducts;

export const useMostPurchasedProducts = (): ProductsInterface['mostPurchasedProducts'] =>
  useContext(ProductsContext).mostPurchasedProducts;

export const useAllCategories = (): ProductsInterface['allCategories'] =>
  useContext(ProductsContext).allCategories;

export const useLoadNewProducts = (): ProductsInterface['loadNewProducts'] =>
  useContext(ProductsContext).loadNewProducts;

export const useLoadAllProducts = (): ProductsInterface['loadAllProducts'] =>
  useContext(ProductsContext).loadAllProducts;


const ProductsContextProvider: React.FunctionComponent = ({ children }) => {
  const { products, productsContextActions } = useStore();

  return (
    <ProductsContext.Provider value={{
      ...products,
      loadNewProducts: productsContextActions.loadNewProducts,
      loadAllProducts: productsContextActions.loadAllProducts,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
