import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./reducers/addProductSlice";
import addToCartSlice from "./reducers/addToCartSlice";
import cartTotalSlice from "./reducers/cartTotalSlice";

const store = configureStore({
    reducer: {
        addProduct: addProductSlice,
        addToCart: addToCartSlice,
        cartTotal: cartTotalSlice
    }
});

export default store;
