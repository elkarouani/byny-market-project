import DropDownArrowIcon from '@/components/Icons/DropDownArrowIcon';
import MenuIcon from '@/components/Icons/MenuIcon';
import ProductCard from '@/components/Store/ProductCard';
import ServiceCard from '@/components/Store/ServiceCard';
import SimpleCarousel from '@/components/UI/MyCarousel/SimpleCarousel';
import SimpleDropDown from '@/components/UI/MyDropDowns/SimpleDropDown';
import SimpleNavigator from '@/components/UI/MyNavigators/SimpleNavigator';
import Product from '@/hooks/entities/Product';
import Service from '@/hooks/entities/Service';
import BynyMarketLogo from '@/media/images/BynyMarketLogo.png';
import ServiceClientIcon from '@/media/images/ServiceClientIcon.png';

export default function HomePage() {
	const myProduct = new Product();
	myProduct.slug = "centrale-laitière";
	myProduct.label = "Centrale laitière";
	myProduct.price = 3.40;
	myProduct.description = "Lait Frais Pasteurisé";
	myProduct.illustration = BynyMarketLogo;

	const myService = new Service();
	myService.slug = "service-client";
	myService.label = "Service client toujours disponible";
	myService.description = "Nous sommes là pour vous aider";
	myService.illustration = ServiceClientIcon;

	return (
		<div className="space-y-8">
			<h1>Home Page</h1>
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