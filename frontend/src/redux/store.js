import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,REGISTER,PURGE} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: 'root', version: 1, storage }
const persistedReducer = persistReducer(persistConfig, userReducer);

const store=configureStore({
    reducer: {
        cart: cartReducer,  
        user: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});
let persistorStore=persistStore(store);

export { store, persistorStore };
//Now go to index.js