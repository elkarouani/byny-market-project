import CartInterface from "../interfaces/CartInterface";

const cartInitialState: CartInterface = {
  cartItems: [],
  increaseItemQuantity: (productSlug: string) => {},
  decreaseItemQuantity: (productSlug: string) => {},
  removeItemFromCart: (productSlug: string) => {}
};

export default cartInitialState;