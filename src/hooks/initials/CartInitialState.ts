import Product from "../entities/Product";
import CartInterface from "../interfaces/CartInterface";

const cartInitialState: CartInterface = {
  cartItems: [],
  addProductToCart: (product: Product) => {},
  increaseItemQuantity: (productSlug: string) => {},
  decreaseItemQuantity: (productSlug: string) => {},
  removeItemFromCart: (productSlug: string) => {}
};

export default cartInitialState;