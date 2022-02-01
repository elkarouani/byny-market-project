import { useAddProductToCart, useIsProductInCart, useRemoveItemFromCart } from "@/hooks/contexts/CartContext";
import Product from "@/hooks/entities/Product";
import { Link } from "react-router-dom";
import ActionButton from "../UI/MyButtons/ActionButton";

interface ProductCardProps {
	product: Product;
	onClick?: (slug: string) => void;
	extraClassesForLayout?: string;
	extraClassesForFooter?: string;
}

export default function ProductCard(props: ProductCardProps) {
	const { slug, label, price, description, illustration } = props.product;
	const addToCartHandler = useAddProductToCart();
	const removeItemFromCartHandler = useRemoveItemFromCart();
	const isProductInCartHandler = useIsProductInCart();

	return (
		<div className={`product-card__layout ${props.extraClassesForLayout || ''}`}>
			<div className="px-2 flex flex-col items-center">
				<div className="product-card__illustration">
					<img src={`/images/${illustration}`} alt={label} />
				</div>
				<Link
					to={`/products/${slug}`}
					className="product-card__label"
				>
					{label}
				</Link>
				{
					description.length < 15
						? <p className="product-card__description">{description}</p>
						: <p className="product-card__description">{description.substring(0, 15)}...</p>
				}
			</div>
			<div className={`product-card__footer ${props.extraClassesForFooter || ''}`}>
				<h3 className="text-xs font-semibold">{price.toFixed(2)} Dh</h3>
				<ActionButton
					label={isProductInCartHandler(slug) ? 'Retirer' : 'Ajouter'}
					extraClass={`
						${isProductInCartHandler(slug)
							? 'product-card__footer--added-to-cart'
							: 'product-card__footer--add-to-cart'
						}
					`}
					onClick={() =>
						isProductInCartHandler(slug)
							? removeItemFromCartHandler(slug)
							: addToCartHandler(props.product)
					}
				/>
			</div>
		</div>
	);
}