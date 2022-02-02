import { useCallback, useState } from "react";

const useCarousel = (slides_length: number, carousel_id: string) => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [scrollingDirection, setScrollingDirection] = useState("");
  const [visibleSlideIndex, setVisibleSlideIndex] = useState(0);

  return {
    isTherePrevious: useCallback(
      () => currentCarouselIndex > 0,
      [currentCarouselIndex]
    ),
    isThereNext: useCallback(
      () => currentCarouselIndex < slides_length - 1,
      [currentCarouselIndex, slides_length]
    ),
    isItCurrentSlide: useCallback(
      (index: number) => index === currentCarouselIndex,
      [currentCarouselIndex]
    ),
    isSlideVisible: useCallback(
      (index: number) => index === visibleSlideIndex,
      [visibleSlideIndex]
    ),
    getScrollDirection: useCallback(
      () => scrollingDirection,
      [scrollingDirection]
    ),
    scrollToSlide: useCallback(
      (direction: "previous" | "next") => {
        const newIndex =
          (direction === "previous" && currentCarouselIndex - 1) ||
          (direction === "next" && currentCarouselIndex + 1) ||
          0;

        setCurrentCarouselIndex(newIndex);
        setScrollingDirection(direction);
        setTimeout(() => setVisibleSlideIndex(newIndex), 200);
      },
      [currentCarouselIndex]
    ),
  };
};

export default useCarousel;
