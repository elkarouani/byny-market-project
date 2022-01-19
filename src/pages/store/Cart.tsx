import CartWithItems from "@/components/Store/Cart/CartWithItems";
import CartWithNoItems from "@/components/Store/Cart/CartWithNoItems";
import CartDetails from "@/hooks/entities/CartDetails";
import Product from "@/hooks/entities/Product";
import HeadlessLayout from "@/layouts/HeadlessLayout";


export default function CartPage() {
	const cartItems: CartDetails[] = [];

	return (
		<div>
			<HeadlessLayout.PageTitle title="Your Cart" />
			{cartItems.length ? <CartWithItems cartItems={cartItems} /> : <CartWithNoItems />}
		</div>
	);
}