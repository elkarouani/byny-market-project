import { useAddProductToCart } from "@/hooks/contexts/CartContext";
import Product from "@/hooks/entities/Product";
import ActionButton from "../UI/MyButtons/ActionButton";

interface ProductCardProps {
	product: Product;
	onClick?: (slug: string) => void;
	extraClassesForLayout?: string;
	extraClassesForFooter?: string;
}

export default function ProductCard(props: ProductCardProps) {
	const { label, price, description, illustration } = props.product;
	const addToCartHandler = useAddProductToCart();

	return (
		<div className={`product-card__layout ${props.extraClassesForLayout || ''}`}>
			<div className="px-2 flex flex-col items-center">
				<div className="product-card__illustration">
					<img src={`/images/${illustration}`} alt={label} />
				</div>
				<h3 className="product-card__label">{label}</h3>
				{
					description.length < 15 
					? <p className="product-card__description">{description}</p>
					: <p className="product-card__description">{description.substring(0, 15)}...</p>
				}
			</div>
			<div className={`product-card__footer ${props.extraClassesForFooter || ''}`}>
				<h3 className="text-xs font-semibold">{price.toFixed(2)} Dh</h3>
				<ActionButton 
					label="Ajouter"
					extraClass="product-card__footer--add-to-cart" 
					onClick={() => addToCartHandler(props.product)}
				/>
			</div>
		</div>
	);
}