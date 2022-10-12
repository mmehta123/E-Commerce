import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

//3
const store=configureStore({
    reducer: {
        cart: cartReducer,  
        user: userReducer,
    }
});

export default store;
//Now go to index.js