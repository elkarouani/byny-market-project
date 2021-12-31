import CartItem from "@/components/Store/CartItem";
import CartDetails from "@/hooks/entities/CartDetails";
import Product from "@/hooks/entities/Product";
import HeadlessLayout from "@/layouts/HeadlessLayout";

export default function CartPage() {
	const product = new Product(
		"lukus",
		"Lukus",
		"Lukus.png",
		"Filets de maquereaux à l'huile végétale",
		7.95
	);
	const cartItem = new CartDetails(product, 3);

	return (
		<div>
			<HeadlessLayout.PageTitle title="Your Cart" />
			<CartItem item={cartItem} />
		</div>
	);
}