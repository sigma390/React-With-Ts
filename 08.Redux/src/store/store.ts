import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
//step 1

configureStore({
    //step 3
    reducer:{
        cart : cartSlice.reducer // cart will be rducer controlled by carSlice
    }
});