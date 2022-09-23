const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

const initialState = [];

export const cartReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter((item)=> item.id!==action.payload);
        case CLEAR_CART: 
            return [];
        default: return state;
    }
}