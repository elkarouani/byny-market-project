import { useCallback, useReducer } from "react";
import storeInitialState from "../initials/StoreInitialState";
import StoreInterface from "../interfaces/StoreInterface";
import storeReducer from "../reducers/storeReducer";

export default function useStore(): StoreInterface {
  const [storeState, storeDispatch] = useReducer(storeReducer, storeInitialState);

  return {
    products: storeState.products,
    services: storeState.services,
    productsContextActions: {
      loadAllProducts: useCallback(() => storeDispatch({ type: "GET_ALL_PRODUCTS" }), []),
      loadAllCategories: useCallback(() => storeDispatch({ type: "GET_ALL_CATEGORIES" }), []),
      loadNewProducts: useCallback(() => storeDispatch({ type: "GET_NEW_PRODUCTS" }), []),
      loadMostPurchasedProducts: useCallback(() => storeDispatch({ type: "GET_MOST_PURCHASED_PRODUCTS" }), []),
    },
    servicesContextActions: {
      loadAllServices: useCallback(() => storeDispatch({ type: "GET_ALL_SERVICES" }), []),
    },
  };
}