import { useCallback, useReducer } from "react";
import Product from "../entities/Product";
import storeInitialState from "../initials/StoreInitialState";
import StoreInterface from "../interfaces/StoreInterface";
import storeReducer from "../reducers/storeReducer";

export default function useStore(): StoreInterface {
  const [storeState, storeDispatch] = useReducer(storeReducer, storeInitialState);

  return {
    products: storeState.products,
    services: storeState.services,
    cart: storeState.cart,
    productsContextActions: {
      loadAllProducts: useCallback(() => storeDispatch({ type: "GET_ALL_PRODUCTS" }), []),
      loadAllCategories: useCallback(() => storeDispatch({ type: "GET_ALL_CATEGORIES" }), []),
      loadNewProducts: useCallback(() => storeDispatch({ type: "GET_NEW_PRODUCTS" }), []),
      loadMostPurchasedProducts: useCallback(() => storeDispatch({ type: "GET_MOST_PURCHASED_PRODUCTS" }), []),
      addProductToCart: useCallback((product: Product) => storeDispatch({ type: "ADD_PRODUCT_TO_CART", payload: product }), [])
    },
    servicesContextActions: {
      loadAllServices: useCallback(() => storeDispatch({ type: "GET_ALL_SERVICES" }), []),
    },
    cartContextActions: {
      increaseItemQuantity: useCallback((productSlug: string) => storeDispatch({ type: "INCREASE_ITEM_QUANTITY", payload: productSlug }), []),
      decreaseItemQuantity: useCallback((productSlug: string) => storeDispatch({ type: "DECREASE_ITEM_QUANTITY", payload: productSlug }), []),
      removeItemFromCart: useCallback((productSlug: string) => storeDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: productSlug }), [])
    }
  };
}