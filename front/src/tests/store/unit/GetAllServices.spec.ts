import useStore from "@/hooks/uses/useStore";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Store/unit: Get all services", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useStore());

    expect(result.current.services.allServices.length).toBe(1);
  });
  it("should get all products", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.servicesContextActions?.loadAllServices();
    });

    expect(result.current.services.allServices.length).toBeGreaterThan(1);
  });
});
