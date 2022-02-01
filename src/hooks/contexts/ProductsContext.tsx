import { createContext, useContext, useEffect } from "react";
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

export const useLoadAllCategories = (): ProductsInterface['loadAllCategories'] =>
  useContext(ProductsContext).loadAllCategories;

export const getProductBySlug = (slug: string) => 
  useContext(ProductsContext).allProducts.find(product => product.slug === slug);
  
const ProductsContextProvider: React.FunctionComponent = ({ children }) => {
  const { products, productsContextActions } = useStore();

  useEffect(() => {
    productsContextActions.loadAllProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{
      ...products,
      loadNewProducts: productsContextActions.loadNewProducts,
      loadAllCategories: productsContextActions.loadAllCategories,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
