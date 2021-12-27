import StoreInterface from "../interfaces/StoreInterface";
import productsInitialState from "./ProductsInitialState";
import servicesInitialState from "./ServicesInitialState";

const storeInitialState: StoreInterface = {
  products: productsInitialState,
  services: servicesInitialState,
  productsContextActions: {
    loadAllProducts: () => {},
    loadAllCategories: () => {},
    loadNewProducts: () => {},
    loadMostPurchasedProducts: () => {},
  },
  servicesContextActions: {
    loadAllServices: () => {},
  },
};

export default storeInitialState;