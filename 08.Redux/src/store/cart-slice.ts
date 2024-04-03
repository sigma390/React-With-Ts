import { createSlice ,  type PayloadAction } from "@reduxjs/toolkit";

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
        //add to cart reducer
        // action Type and also <> extract data required only
        addToCart(state, action:PayloadAction<{id:string; title:string;price:number}>){
            //STEP 7 USE state and action
            const itemIndex = state.items.findIndex((item)=>{
                item.id=== action.payload.id
            });

            //step 8 check id found or not
            if (itemIndex>=0) {
                state.items[itemIndex].qty++;
            }
            else{
                //if its nnot exists
                //but payload doesnt have qty property so we add exxtraa qty prop
                state.items.push({...action.payload,qty:1})
            }


        },

        //step 9 remove items fro m cart
        removeItem(state, action : PayloadAction<{id:string}>){
            const itemIndex = state.items.findIndex((item)=> item.id=== action.payload.id);
            if (state.items[itemIndex].qty === 1) {
                state.items.splice(itemIndex,1);
            }
            else{
                state.items[itemIndex].qty--;
            }
        }

    }
}); //takes object as arguement

//step 12 use dispatch they create custom actions named below


export const {addToCart ,  removeItem} = cartSlice.actions;