import { createSlice } from "@reduxjs/toolkit"

export const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState: [],
    reducers: {
        addToCart: (state,action) => {
            state.push(action.payload);
        },
        removeFromCart: (state,action) => {
            state.splice(state.findIndex((item) => item.id === action.payload.id),1);
        }
    }
});

export default addToCartSlice.reducer
export const { addToCart, removeFromCart } = addToCartSlice.actions