import Product from "@/hooks/entities/Product";
import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

const productsInitialState = {
  products: [new Product()],
};

describe("Store/unit: Get all products", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.productsState.allProducts.length).toBe(1);
  });
  it("should get all products", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.loadAllProducts();
    });

    expect(result.current.productsState.allProducts.length).toBeGreaterThan(1);
  });
});
