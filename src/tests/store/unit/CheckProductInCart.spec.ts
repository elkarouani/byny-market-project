import useStore from "@/hooks/uses/useStore";
import Product from "@/hooks/entities/Product";
import { renderHook, act } from "@testing-library/react-hooks";


describe("Store/unit: check product in cart", () => {
  it("should check if a product is in cart", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.cartContextActions.addProductToCart(new Product('test'));
    });

    expect(result.current.cart.cartItems.length).toEqual(1);
    expect(result.current.cart.cartItems[0].quantity).toEqual(1);

    expect(result.current.cartContextActions.isProductInCart('test')).toEqual(true);
  });
});
