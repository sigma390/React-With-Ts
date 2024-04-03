import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch , RootState } from "./store"


//step 16 
type DispatchFxn = () => AppDispatch;
//step 17 use Selector
export  const useCartDispatch: DispatchFxn = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;