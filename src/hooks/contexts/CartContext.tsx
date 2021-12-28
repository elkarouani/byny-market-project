import { createContext, useContext } from "react";
import cartInitialState from "../initials/CartInitialState";
import CartInterface from "../interfaces/CartInterface";
import useStore from "../uses/useStore";

const CartContext = createContext<CartInterface>(cartInitialState);

const useCart = (): CartInterface['cartItems'] => 
  useContext(CartContext).cartItems;

const useIncreaseItemQuantity = (): CartInterface['increaseItemQuantity'] =>
  useContext(CartContext).increaseItemQuantity;

const useDecreaseItemQuantity = (): CartInterface['decreaseItemQuantity'] =>
  useContext(CartContext).decreaseItemQuantity;

const useRemoveItemFromCart = (): CartInterface['removeItemFromCart'] =>
  useContext(CartContext).removeItemFromCart;


const CartContextProvider: React.FunctionComponent = ({ children }) => {
  const { cart, cartContextActions } = useStore();

  return (
    <CartContext.Provider value={{
      ...cart,
      increaseItemQuantity: cartContextActions.increaseItemQuantity,
      decreaseItemQuantity: cartContextActions.decreaseItemQuantity,
      removeItemFromCart: cartContextActions.removeItemFromCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;