import { useDispatch } from "react-redux";
import { AppDispatch } from "./store"


//step 16
type DispatchFxn = () => AppDispatch;

export  const useCartDispatch: DispatchFxn = useDispatch;