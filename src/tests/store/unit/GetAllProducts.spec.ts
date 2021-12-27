import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Get all products", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.products.allProducts.length).toBe(1);
  });
  it("should get all products", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.productsContextActions?.loadAllProducts();
    });

    expect(result.current.products.allProducts.length).toBeGreaterThan(1);
  });
});
