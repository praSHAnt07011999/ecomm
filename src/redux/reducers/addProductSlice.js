import { createSlice } from "@reduxjs/toolkit";

export const addProductSlice = createSlice({
    name: 'addProduct',
    initialState: [],
    reducers: {
        addProduct: (state,action) => {
            state.push(action.payload);
        }
    }
});

export default addProductSlice.reducer
export const { addProduct } = addProductSlice.actions