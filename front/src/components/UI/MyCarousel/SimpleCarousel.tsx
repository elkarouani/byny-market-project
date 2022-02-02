import ScrollLeftArrowIcon from "@/components/Icons/ScrollLeftArrowIcon";
import ScrollRightArrowIcon from "@/components/Icons/ScrollRightArrowIcon";
import ProductCard from "@/components/Store/ProductCard";
import Product from "@/hooks/entities/Product";
import useCarousel from "@/hooks/uses/useCarousel";

interface SimpleCarouselProps {
	products: Product[],
	id: string,
}

export default function SimpleCarousel(props: SimpleCarouselProps) {
	const fromCarouselUse = useCarousel(props.products.length, props.id);

	return (
		<div className="flex items-center space-x-2">
			<span
				className={
					fromCarouselUse.isTherePrevious()
						? `cursor-pointer`
						: 'opacity-50'
				}
				onClick={() =>
					fromCarouselUse.isTherePrevious() &&
					fromCarouselUse.scrollToSlide('previous')
				}
			>
				<ScrollRightArrowIcon />
			</span>
			<div className="w-52 overflow-hidden">
				<ul className="flex justify-center">
					{props.products.map((product, index) =>
						<li
							id={`carousel-${props.id}-item-${index}`}
							key={index}
							className={`
								${fromCarouselUse.isSlideVisible(index) ? 'visible' : 'hidden'}
								${fromCarouselUse.isItCurrentSlide(index)
									? (
										(
											fromCarouselUse.getScrollDirection() === 'previous' &&
											'animate-fade-in-left'
										) ||
										(
											fromCarouselUse.getScrollDirection() === 'next' &&
											'animate-fade-in-right'
										) || ''
									)
									: (
										(
											fromCarouselUse.getScrollDirection() === 'previous' &&
											'animate-fade-out-right'
										) ||
										(
											fromCarouselUse.getScrollDirection() === 'next' &&
											'animate-fade-out-left'
										) || ''
									)
								}
							`}
						>
							<ProductCard product={product} />
						</li>
					)}
				</ul>
			</div>
			<span
				className={
					fromCarouselUse.isThereNext()
						? `cursor-pointer`
						: 'opacity-50'
				}
				onClick={() =>
					fromCarouselUse.isThereNext() &&
					fromCarouselUse.scrollToSlide("next")
				}
			>
				<ScrollLeftArrowIcon />
			</span>
		</div>
	)
}