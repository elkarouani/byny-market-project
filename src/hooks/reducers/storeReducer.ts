import Product from "../entities/Product";
import Service from "../entities/Service";
import StoreInterface from "../interfaces/StoreInterface";

export default function storeReducer(state: StoreInterface, action: any) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          allProducts: [...state.products.allProducts, new Product()],
        },
      };
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        products: {
          ...state.products,
          allCategories: [...state.products.allCategories, ""],
        },
      };
    case "GET_NEW_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          newProducts: [...state.products.newProducts, new Product()],
        },
      };
    case "GET_MOST_PURCHASED_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          mostPurchasedProducts: [...state.products.mostPurchasedProducts, new Product()],
        },
      };
    case "GET_ALL_SERVICES":
      return {
        ...state,
        services: {
          ...state.services,
          allServices: [...state.services.allServices, new Service()],
        },
      };
    default:
      return state;
  }
}
