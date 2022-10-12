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
            // Login to increase quantity of same product with same specifications(Not adding as another product) 
            // if(state.products.length!==0){
            //     state?.products.map(product=>{
            //         //this will check if same product already exists with smae color and size if yes then it will only increse its quantity 
            //         if (action.payload?.color === product?.color && action.payload?.size === product?.size &&
            //             action.payload?._id === product?._id) {
            //                     product.quantity+=action.payload.quantity;
            //             }else{
            //                 // else it will add it as new product
            //                 state.products.push(action.payload);
            //                 state.quantity += 1;      //this is not product's quantity it is no. of type of products we added to cart 
            //             }
            //         });
            //     }else{
            //         // if it is our first product then it appand it first time
            //         state.products.push(action.payload);
            //         state.quantity += 1;      //this is not product's quantity it is no. of type of products we added to cart 
            //     }
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