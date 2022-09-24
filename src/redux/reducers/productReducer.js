const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const initialState = [];

export const productReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return [...state, action.payload];
        case REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.payload);
        case UPDATE_PRODUCT:
            const index = state.findIndex(item => item.id === action.payload.id)
            const newState = [...state];
            newState[index]=action.payload;
            return newState;
        default: return state;
    }
}