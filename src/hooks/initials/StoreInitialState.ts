import StoreInterface from "../interfaces/StoreInterface";
import productsInitialState from "./ProductsInitialState";
import servicesInitialState from "./ServicesInitialState";

const storeInitialState: StoreInterface = {
  products: productsInitialState,
  services: servicesInitialState
};

export default storeInitialState;