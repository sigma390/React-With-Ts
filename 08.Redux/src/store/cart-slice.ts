import { createSlice } from "@reduxjs/toolkit";

//step 4 create typee of Data the below slice can manage

type CartItem = {
    id:string,
    title:string,
    price:number,
    qty:number


}

type CartState = {
    items: CartItem[]
}
//step 5 create a initial state
const initialState:CartState = {
    items:[]
}

//step 2
export const cartSlice = createSlice({
    name:'cart', //for uniqueness
    initialState,
    //step 6 Create Reducers
    reducers:{

    }
}); //takes object as arguement