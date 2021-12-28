import CartDetails from "../entities/CartDetails";

export default interface CartInterface {
  cartItems: CartDetails[];
  increaseItemQuantity(productSlug: string): void;
  decreaseItemQuantity(productSlug: string): void;
  removeItemFromCart(productSlug: string): void;
}
