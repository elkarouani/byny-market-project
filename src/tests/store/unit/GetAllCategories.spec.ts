import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Get all categories", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.products.allCategories.length).toBe(1);
  });
  it("should get all categories", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.productsContextActions?.loadAllCategories();
    });

    expect(result.current.products.allCategories.length).toBeGreaterThan(1);
  });
});
