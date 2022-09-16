import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./reducers/addProductSlice";

const store = configureStore({
    reducer: {
        addProduct: addProductSlice
    }
});

export default store;