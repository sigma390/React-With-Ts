import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

//step 1

export const Store = configureStore({
    //step 3
    reducer:{
        cart : cartSlice.reducer // cart will be rducer controlled by carSlice
    }
});

//step 15 export Type Dispatch
export type AppDispatch = typeof Store.dispatch