import Product from "@/hooks/entities/Product";
import ActionButton from "../UI/MyButtons/ActionButton";

interface ProductCardProps {
	product: Product;
	onClick?: (slug: string) => void;
}

export default function ProductCard(props: ProductCardProps) {
	const { slug, label, price, description, illustration } = props.product;
	const addToCartHandler = () => props.onClick && props.onClick(slug);

	return (
		<div className="product-card__layout">
			<div className="px-2 flex flex-col items-center">
				<div className="product-card__illustration">
					<img src={illustration} alt={label} />
				</div>
				<h3 className="product-card__label">{label}</h3>
				<p className="product-card__description">{description}</p>
			</div>
			<div className="product-card__footer">
				<h3 className="text-xs font-semibold">{price.toFixed(2)} Dh</h3>
				<ActionButton 
					label="Ajouter"
					extraClass="product-card__footer--add-to-cart" 
				/>
			</div>
		</div>
	);
}