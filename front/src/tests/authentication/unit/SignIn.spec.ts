import { renderHook, act } from "@testing-library/react-hooks";
import useAuth from "@/hooks/uses/useAuth";
import User from "@/hooks/entities/User";

const userInitialState = {
  user: new User("elkarouani@gmail.com"),
};

describe("Authentication/unit: Sign in", () => {
  it("should return the initial state", () => {
    const { result } = renderHook(() => useAuth(userInitialState));

    expect(result.current.userState.user.email).toEqual(
      userInitialState.user.email
    );
    expect(result.current.userState.user.isAuthenticated).toBeFalsy();
  });

  it("should set the user state", () => {
    const { result } = renderHook(() => useAuth(userInitialState));

    act(() => {
      result.current.signIn("test@mail.fr");
    });

    expect(result.current.userState.user.email).toEqual("test@mail.fr");
    expect(result.current.userState.user.isAuthenticated).toBeTruthy();
  });
});
