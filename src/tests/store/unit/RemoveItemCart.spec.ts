import Product from "@/hooks/entities/Product";
import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Remove item from cart", () => {
  it("should return an empty cart before adding one", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.cartContextActions.addProductToCart(new Product("test"));
    });

    expect(result.current.cart.cartItems.length).toEqual(1);
    expect(result.current.cart.cartItems[0].quantity).toEqual(1);
    expect(result.current.cart.cartItems[0].product.slug).toEqual("test");

    act(() => {
      result.current.cartContextActions.removeItemFromCart("test");
    });

    expect(result.current.cart.cartItems.length).toEqual(0);
  });
});
