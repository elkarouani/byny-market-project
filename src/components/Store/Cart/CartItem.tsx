import CartDetails from "@/hooks/entities/CartDetails";
import CartItemControl from "./CartItemControl";

interface CartItemInterface {
  item: CartDetails;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export default function CartItem(props: CartItemInterface) {
  const { slug, illustration, label, description } = props.item.product;

  const onRemoveHandler = () => {
    document
      .querySelector(`#cart-item-${slug}`)
      ?.classList
      .toggle("animate-fade-out-left");
      
    setTimeout(
      () => props.onRemove?.(),
      300
    );
  };

  return (
    <div 
      id={`cart-item-${slug}`} 
      className="px-6 space-y-2"
    >
      <div className="py-2 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-3">
          <div className="cart-item__illustration">
            <img src={`/images/${illustration}`} alt={label} />
          </div>
          <div>
            <h4 className="font-semibold text-[#122E44]/70">{label}</h4>
            <p className="text-[#000000]/30 font-medium">{description.substring(0, 20)}...</p>
          </div>
        </div>
        <CartItemControl 
          counterValue={props.item.quantity} 
          onPlusClick={props.onIncrease}
          onMinusClick={props.onDecrease}
          onRemoveClick={onRemoveHandler}
        />
      </div>
      <hr />
    </div>
  );
}