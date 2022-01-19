import CartDetails from "@/hooks/entities/CartDetails";
import ActionButton from "../../UI/MyButtons/ActionButton";
import CartItem from "./CartItem";

export default function CartWithItems({ cartItems }: {
  cartItems: CartDetails[];
}) {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="h-[400px] overflow-y-scroll space-y-2">
        {cartItems.map((cartItem: CartDetails) =>
          <CartItem
            item={cartItem}
            key={cartItem.product.slug}
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