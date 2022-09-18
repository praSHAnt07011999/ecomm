import { createSlice } from "@reduxjs/toolkit"

export const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState: [],
    reducers: {
        addToCart: (state,action) => {
            state.push(action.payload);
        },
        // removeFromCart: (state,action) => {
        //     state
        // }
    }
});

export default addToCartSlice.reducer
export const { addToCart } = addToCartSlice.actions 