import ServiceCard from '@/components/Store/ServiceCard';
import SimpleCarousel from '@/components/UI/MyCarousel/SimpleCarousel';
import { useLoadNewProducts, useNewProducts } from '@/hooks/contexts/ProductsContext';
import { useAllServices, useLoadAllServices } from '@/hooks/contexts/ServicesContext';
import Service from '@/hooks/entities/Service';
import { useEffect } from 'react';

export default function HomePage() {
	const [
		newProducts, 
		loadNewProducts,
		allServices,
		loadAllServices,
	] = [
		useNewProducts(), 
		useLoadNewProducts(),
		useAllServices(),
		useLoadAllServices(),
	];

	useEffect(() => {
		loadNewProducts();
		loadAllServices();
	}, []);

	return (
		<div className="flex flex-col space-y-8 text-center">
			<div className="py-6 flex flex-col items-center space-y-8">
				<h4 className="home-page__section--title">Les Nouveaux :</h4>
				<SimpleCarousel id="NProducts" products={newProducts ?? []} />
			</div>
			<div className="flex flex-col items-center">
				<hr className="w-2/3" />
				<div className="py-6 flex flex-col items-center space-y-8">
					<h4 className="home-page__section--title">Les Plus Vendus :</h4>
					<SimpleCarousel id="MPProducts" products={newProducts ?? []} />
				</div>
			</div>
			<div className="flex flex-col items-center">
				<hr className="w-2/3" />
				<div className="py-6 flex flex-col items-center space-y-8">
					<h4 className="home-page__section--title">Nos Services :</h4>
					<div className="grid grid-cols-2">
						{allServices.map((service: Service) => (
							<ServiceCard key={service.slug} service={service} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}