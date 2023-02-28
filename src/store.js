import { configureStore  } from "@reduxjs/toolkit";
import cartReducer from './features/Cart/cartSlice';


export const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
});