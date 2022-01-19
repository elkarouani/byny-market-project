import ProductCard from "@/components/Store/ProductCard";
import SimpleNavigator from "@/components/UI/MyNavigators/SimpleNavigator";
import { useCart } from "@/hooks/contexts/CartContext";
import { useAllProducts, useLoadAllProducts } from "@/hooks/contexts/ProductsContext";
import Product from "@/hooks/entities/Product";
import { useEffect } from "react";

export default function ProductsPage() {
	const [allProducts, loadAllProducts] = [useAllProducts(), useLoadAllProducts()];

	useEffect(() => {
		loadAllProducts();
	}, []);

	return (
		<div className="py-7 flex flex-col items-center space-y-8 text-center">
			<h4 className="home-page__section--title">All Products :</h4>
			<div className="px-4 grid grid-cols-2 gap-2">
				{allProducts.map((product: Product) => 
					<ProductCard 
						key={product.slug} 
						product={product}
						extraClassesForLayout="!w-auto justify-between"
						extraClassesForFooter="!space-x-0 justify-between"
					/>
				)}
			</div>
			<SimpleNavigator pagesCount={4} currentPage={1} />
		</div>
	);
}