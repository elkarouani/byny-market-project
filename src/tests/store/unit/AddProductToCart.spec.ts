import Product from "@/hooks/entities/Product";
import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Add product to cart", () => {
  it("should add a product to cart", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.productsContextActions.addProductToCart(new Product());
    });

    expect(result.current.cart.cartItems.length).toEqual(1);
    expect(result.current.cart.cartItems[0].quantity).toEqual(1);
  });
});
