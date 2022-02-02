import CartDetails from "../entities/CartDetails";
import Product from "../entities/Product";

export default interface CartInterface {
  cartItems: CartDetails[];
  addProductToCart: (product: Product) => void;
  isProductInCart: (productSlug: string) => boolean;
  increaseItemQuantity(productSlug: string): void;
  decreaseItemQuantity(productSlug: string): void;
  removeItemFromCart(productSlug: string): void;
}
