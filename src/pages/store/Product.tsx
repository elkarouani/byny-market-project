import { getProductBySlug } from "@/hooks/contexts/ProductsContext";
import { useParams } from "react-router-dom";
import ProductNotFound from "@/components/Store/ProductNotFound";
import ActionButton from "@/components/UI/MyButtons/ActionButton";
import { useAddProductToCart, useIsProductInCart, useRemoveItemFromCart } from "@/hooks/contexts/CartContext";
import AddToCartIcon from "@/components/Icons/AddToCartIcon";
import RemoveFromCartIcon from "@/components/Icons/RemoveFromCartIcon";

export default function ProductPage() {
	const { slug } = useParams();
	const product = getProductBySlug(slug as string);
	const isProductInCartHandler = useIsProductInCart();
	const removeItemFromCartHandler = useRemoveItemFromCart();
	const addToCartHandler = useAddProductToCart();

	if (!product) return <ProductNotFound />;

	return (
		<div className="flex flex-col items-center space-y-6">
			<img
				src={`/images/${product.illustration}`}
				alt={product.label}
			/>

			<h3 className="text-2xl font-semibold">{product.label}</h3>

			<p className="w-4/5 text-dark-primary text-lg text-center">{product.description}</p>

			<div className="w-full !mt-12 flex justify-around items-center">
				<div className="space-y-2 text-dark-primary">
					<p>
						<strong>Price : </strong>
						{product.price.toFixed(2)} Dh
					</p>
					<p>
						<strong>Unit : </strong>
						{`${product.unit.value} ${product.unit.label}`}
					</p>
				</div>

				<ActionButton
					label={isProductInCartHandler(product.slug) ? 'Retirer' : 'Ajouter'}
					extraClass={`
						${isProductInCartHandler(product.slug)
							? 'action-button__added-to-cart--with-icon'
							: 'action-button__add-to-cart--with-icon'
						}
					`}
					onClick={() =>
						isProductInCartHandler(product.slug)
							? removeItemFromCartHandler(product.slug)
							: addToCartHandler(product)
					}
					withIcon
					icon={isProductInCartHandler(product.slug) ? <RemoveFromCartIcon /> : <AddToCartIcon />}
				/>
			</div>
		</div>
	);
}