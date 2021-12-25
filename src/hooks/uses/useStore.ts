import { useReducer } from "react";
import storeInitialState from "../initials/StoreInitialState";
import storeReducer from "../reducers/storeReducer";

export default function useStore() {
  const [storeState, storeDispatch] = useReducer(storeReducer, storeInitialState);

  return {
    productsState: storeState.products,
    productsContextActions: {
      loadAllProducts: () => {
        storeDispatch({ type: "GET_ALL_PRODUCTS" });
      },
      loadAllCategories: () => {
        storeDispatch({ type: "GET_ALL_CATEGORIES" });
      },
      loadNewProducts: () => {
        storeDispatch({ type: "GET_NEW_PRODUCTS" });
      },
      loadMostPurhasedProducts: () => {
        storeDispatch({ type: "GET_MOST_PURCHASED_PRODUCTS" });
      }
    }
  };
}
