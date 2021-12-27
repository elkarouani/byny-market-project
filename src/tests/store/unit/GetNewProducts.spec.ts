import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Get new products", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.products.newProducts.length).toBe(1);
  });
  it("should get new products", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.productsContextActions?.loadNewProducts();
    });

    expect(result.current.products.newProducts.length).toBeGreaterThan(1);
  });
});
