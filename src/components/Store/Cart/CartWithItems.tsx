import { useDecreaseItemQuantity, useIncreaseItemQuantity, useRemoveItemFromCart } from "@/hooks/contexts/CartContext";
import CartDetails from "@/hooks/entities/CartDetails";
import ActionButton from "../../UI/MyButtons/ActionButton";
import CartItem from "./CartItem";

export default function CartWithItems({ cartItems }: {
  cartItems: CartDetails[];
}) {
  const increaseItemQuantityHandler = useIncreaseItemQuantity();
  const decreaseItemQuantityHandler = useDecreaseItemQuantity();
  const removeItemFromCartHandler = useRemoveItemFromCart();

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-full h-[400px] overflow-y-scroll space-y-2">
        {cartItems.map((cartItem: CartDetails) =>
          <CartItem
            item={cartItem}
            key={cartItem.product.slug}
            onIncrease={() => increaseItemQuantityHandler(cartItem.product.slug)}
            onDecrease={() => decreaseItemQuantityHandler(cartItem.product.slug)}
            onRemove={() => removeItemFromCartHandler(cartItem.product.slug)}
          />
        )}
      </div>
      <ActionButton
        label="Checkout"
        extraClass="!px-12 !border-success text-success"
      />
    </div>
  )
}