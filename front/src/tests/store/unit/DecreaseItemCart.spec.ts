import Product from "@/hooks/entities/Product";
import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Decrease item in cart", () => {
  it("should return an updated cart quantity", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.cartContextActions.addProductToCart(new Product("test"));
    });

    expect(result.current.cart.cartItems.length).toEqual(1);
    expect(result.current.cart.cartItems[0].quantity).toEqual(1);
    expect(result.current.cart.cartItems[0].product.slug).toEqual("test");

    act(() => {
      result.current.cartContextActions.increaseItemQuantity("test");
    });

    expect(result.current.cart.cartItems[0].quantity).toBe(2);

    act(() => {
      result.current.cartContextActions.decreaseItemQuantity("test");
    });

    expect(result.current.cart.cartItems[0].quantity).toBe(1);
  });
  it("should not decrease quantity if quantity is 1", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.cartContextActions.addProductToCart(new Product("test"));
    });

    expect(result.current.cart.cartItems.length).toEqual(1);
    expect(result.current.cart.cartItems[0].quantity).toEqual(1);
    expect(result.current.cart.cartItems[0].product.slug).toEqual("test");

    act(() => {
      result.current.cartContextActions.decreaseItemQuantity("test");
    });

    expect(result.current.cart.cartItems[0].quantity).toBe(1);
  });
});
