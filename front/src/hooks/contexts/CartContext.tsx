import { createContext, useContext } from "react";
import cartInitialState from "../initials/CartInitialState";
import CartInterface from "../interfaces/CartInterface";
import useStore from "../uses/useStore";

const CartContext = createContext<CartInterface>(cartInitialState);

export const useCart = (): CartInterface['cartItems'] =>
  useContext(CartContext).cartItems;

export const useAddProductToCart = (): CartInterface['addProductToCart'] =>
  useContext(CartContext).addProductToCart;

export const useIsProductInCart = (): CartInterface['isProductInCart'] =>
  useContext(CartContext).isProductInCart;

export const useIncreaseItemQuantity = (): CartInterface['increaseItemQuantity'] =>
  useContext(CartContext).increaseItemQuantity;

export const useDecreaseItemQuantity = (): CartInterface['decreaseItemQuantity'] =>
  useContext(CartContext).decreaseItemQuantity;

export const useRemoveItemFromCart = (): CartInterface['removeItemFromCart'] =>
  useContext(CartContext).removeItemFromCart;


const CartContextProvider: React.FunctionComponent = ({ children }) => {
  const { cart, cartContextActions } = useStore();

  return (
    <CartContext.Provider value={{
      ...cart,
      addProductToCart: cartContextActions.addProductToCart,
      isProductInCart: cartContextActions.isProductInCart,
      increaseItemQuantity: cartContextActions.increaseItemQuantity,
      decreaseItemQuantity: cartContextActions.decreaseItemQuantity,
      removeItemFromCart: cartContextActions.removeItemFromCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;