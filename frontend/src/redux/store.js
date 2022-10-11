import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

//3
const store=configureStore({
    reducer: {
        cart: cartReducer,  //here we can add more reducers for other operations here first one we added
    }
});

export default store;
//Now go to index.js