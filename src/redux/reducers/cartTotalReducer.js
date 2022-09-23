const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
const SUBTRACT_FROM_TOTAL = 'SUBTRACT_FROM_TOTAL';

const initialState = 0;

export const cartTotalReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_TOTAL:
            return state + Number(action.payload);
        case SUBTRACT_FROM_TOTAL:
            return state - Number(action.payload);
        default: return state;
    }
}