import { createSlice } from "@reduxjs/toolkit";

export const cartTotalSlice = createSlice({
    name: 'cartTotal',
    initialState: 0,
    reducers: {
        addToTotal: (state,action) => {
            return state + Number(action.payload.price)
        },
        subtractFromTotal: (state,action) => {
            return state - Number(action.payload.price)
        }
    }
})

export default cartTotalSlice.reducer
export const { addToTotal, subtractFromTotal } = cartTotalSlice.actions