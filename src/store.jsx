import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from '../src/features/cart/Cart'


export const store = configureStore({
    reducer : {
        cart : cartReducer,

    }
})