import { createSlice } from "@reduxjs/toolkit";
// 1
const cartSlice = createSlice({

    name: 'cart',           // 1.1 not used anywhere
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    reducers: {              // 1.2  this objects containes all our actions means addProduct is an action
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1; 
            state.totalPrice += action.payload.price * action.payload.quantity;
        }
    }
});
// 2
export const { addProduct } = cartSlice.actions;      //this action will be used through components via dispatcher fn
export default cartSlice.reducer;                  //this reducer will be used by store in store.js
// Now go to store.js