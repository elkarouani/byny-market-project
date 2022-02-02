import CartWithItems from "@/components/Store/Cart/CartWithItems";
import CartWithNoItems from "@/components/Store/Cart/CartWithNoItems";
import { useCart } from "@/hooks/contexts/CartContext";
import HeadlessLayout from "@/layouts/HeadlessLayout";


export default function CartPage() {
	const cartItems = useCart();

	return (
		<div>
			<HeadlessLayout.PageTitle title="Your Cart" />
			{cartItems.length ? <CartWithItems cartItems={cartItems} /> : <CartWithNoItems />}
		</div>
	);
}