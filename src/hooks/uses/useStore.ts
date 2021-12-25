import { useReducer } from "react";
import Product from "../entities/Product";
import StoreInterface from "../interfaces/StoreInterface";
import storeReducer from "../reducers/storeReducer";

const storeInitialState: StoreInterface = {
  products: {
    allProducts: [new Product()],
  },
};

export default function useStore() {
  const [storeState, storeDispatch] = useReducer(storeReducer, storeInitialState);

  return {
    productsState: storeState.products,
    loadAllProducts: () => {
      storeDispatch({ type: "GET_ALL_PRODUCTS" });
    }
  };
}
