import Product from "../entities/Product";
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
    default:
      return state;
  }
}
