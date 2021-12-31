import CartItem from "@/components/Store/CartItem";
import ActionButton from "@/components/UI/MyButtons/ActionButton";
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
	const cartItems = Array(6).fill(new CartDetails(product, 3));

	return (
		<div className="flex flex-col items-center space-y-6">
			<HeadlessLayout.PageTitle title="Your Cart" />
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
	);
}