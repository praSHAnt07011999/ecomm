const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
const SUBTRACT_FROM_TOTAL = 'SUBTRACT_FROM_TOTAL';
const CLEAR_TOTAL = 'CLEAR_TOTAL';

const initialState = 0;

export const cartTotalReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_TOTAL:
            return state + Number(action.payload);
        case SUBTRACT_FROM_TOTAL:
            return state - Number(action.payload);
        case CLEAR_TOTAL:
            return 0;
        default: return state;
    }
}