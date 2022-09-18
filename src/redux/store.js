import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./reducers/addProductSlice";
import addToCartSlice from "./reducers/addToCartSlice";

const store = configureStore({
    reducer: {
        addProduct: addProductSlice,
        addToCart: addToCartSlice
    }
});

export default store;