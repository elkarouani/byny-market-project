import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Get cart", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.cart.cartItems).toEqual([]);
  });
});
