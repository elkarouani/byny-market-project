import { useReducer } from "react";
import StoreInterface from "../interfaces/StoreInterface";
import storeReducer from "../reducers/storeReducer";

export default function useStore(initialState: StoreInterface) {
  const [storeState, storeDispatch] = useReducer(storeReducer, initialState);

  return {
    storeState,
  };
}
