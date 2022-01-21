import Product from "../entities/Product";
import StoreInterface from "../interfaces/StoreInterface";
import cartInitialState from "./CartInitialState";
import productsInitialState from "./ProductsInitialState";
import servicesInitialState from "./ServicesInitialState";

const storeInitialState: StoreInterface = {
  products: productsInitialState,
  services: servicesInitialState,
  cart: cartInitialState,
  productsContextActions: {
    loadAllProducts: () => {},
    loadAllCategories: () => {},
    loadNewProducts: () => {},
    loadMostPurchasedProducts: () => {},
  },
  servicesContextActions: {
    loadAllServices: () => {},
  },
  cartContextActions: {
    addProductToCart: (product: Product) => {},
    isProductInCart: (productSlug: string) => false,
    increaseItemQuantity: (productSlug: string) => {},
    decreaseItemQuantity: (productSlug: string) => {},
    removeItemFromCart: (productSlug: string) => {}
  },
};

export default storeInitialState;