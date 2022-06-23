import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlide from "./shopping-cart/cartItemsSlide";

export const store = configureStore({
    reducer: {
        cartItems: cartItemsSlide
    }
})