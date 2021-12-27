import DropDownArrowIcon from '@/components/Icons/DropDownArrowIcon';
import MenuIcon from '@/components/Icons/MenuIcon';
import ProductCard from '@/components/Store/ProductCard';
import ServiceCard from '@/components/Store/ServiceCard';
import SimpleCarousel from '@/components/UI/MyCarousel/SimpleCarousel';
import SimpleDropDown from '@/components/UI/MyDropDowns/SimpleDropDown';
import SimpleNavigator from '@/components/UI/MyNavigators/SimpleNavigator';
import { ProductsContext } from '@/hooks/contexts/ProductsContext';
import Product from '@/hooks/entities/Product';
import Service from '@/hooks/entities/Service';
import BynyMarketLogo from '@/media/images/BynyMarketLogo.png';
import ServiceClientIcon from '@/media/images/ServiceClientIcon.png';
import newProducts from '@/store/products/newProducts';
import { useContext, useEffect } from 'react';

export default function HomePage() {
	const { newProducts, loadNewProducts } = useContext(ProductsContext);

	console.log(newProducts);
	console.log(loadNewProducts);

	return (
		<div className="space-y-8 text-center">
			<div>
				<h4>Home Page</h4>
				{/* <SimpleCarousel products={newProducts} /> */}
				<button onClick={loadNewProducts}>load</button>
			</div>
			{/* <MenuIcon /> */}
			{/* <DropDownArrowIcon /> */}
			{/* <SimpleDropDown
				label="Catégories"
				items={['item 1', 'item 2', 'item 3']}
			/> */}
			{/* <ProductCard product={myProduct} /> */}
			{/* <ServiceCard service={myService} /> */}
			{/* <SimpleNavigator pagesCount={4} currentPage={1} /> */}
			{/* <SimpleCarousel products={[myProduct, myProduct, myProduct, myProduct, myProduct, myProduct, myProduct, myProduct, myProduct, myProduct, myProduct, myProduct]} /> */}
		</div>
	);
}