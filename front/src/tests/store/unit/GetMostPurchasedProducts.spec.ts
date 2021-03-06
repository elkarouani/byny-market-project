import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Get most purchased products", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.products.mostPurchasedProducts.length).toBe(1);
  });
  it("should get all products", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.productsContextActions?.loadMostPurchasedProducts();
    });

    expect(result.current.products.mostPurchasedProducts.length).toBeGreaterThan(1);
  });
});
