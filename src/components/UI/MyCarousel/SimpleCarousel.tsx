import ScrollLeftArrowIcon from "@/components/Icons/ScrollLeftArrowIcon";
import ScrollRightArrowIcon from "@/components/Icons/ScrollRightArrowIcon";
import ProductCard from "@/components/Store/ProductCard";
import Product from "@/hooks/entities/Product";
import { useState } from "react";

interface SimpleCarouselProps {
	products: Product[],
	id: string,
}

export default function SimpleCarousel(props: SimpleCarouselProps) {
	const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

	const scrollToElement = (targetIdQuery: string, direction: string) => {
		const target = document.querySelector(targetIdQuery);
		console.log(targetIdQuery, target);
		if (!target) return;
		target.scrollIntoView({ behavior: "smooth" });

		if (
			direction === "next" &&
			currentCarouselIndex < props.products.length
		) setCurrentCarouselIndex(currentCarouselIndex + 1);
		if (
			direction === "previous" &&
			currentCarouselIndex > 0
		) setCurrentCarouselIndex(currentCarouselIndex - 1);
	};

	return (
		<div className="flex items-center space-x-2">
			<span
					className={
						currentCarouselIndex > 0 && `cursor-pointer` || 'opacity-50'
					}
					onClick={() => scrollToElement(
						`#carousel-${props.id}-item-${currentCarouselIndex - 1}`, 
						"previous"
					)}
				>
					<ScrollRightArrowIcon />
				</span>
			<div className="w-52 overflow-hidden">
				<ul className="simple-carousel__content">
					{props.products.map((product, index) =>
						<li id={`carousel-${props.id}-item-${index}`} key={index} className="shrink-0 snap-center">
							<ProductCard product={product} />
						</li>
					)}
				</ul>
			</div>
			<span
				className={
					currentCarouselIndex < (props.products.length - 1) && `cursor-pointer` || 'opacity-50'
				}
				onClick={() => scrollToElement(
					`#carousel-${props.id}-item-${currentCarouselIndex + 1}`,
					"next"
				)}
			>
				<ScrollLeftArrowIcon />
			</span>
		</div>
	)
}