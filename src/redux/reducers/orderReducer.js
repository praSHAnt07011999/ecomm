const PLACE_ORDER = 'PLACE_ORDER';
const CANCEL_ORDER = 'CANCEL_ORDER';

const initialState = []

export const orderReducer = (state=initialState,action) => {

    switch(action.type){
        case PLACE_ORDER:
            return [...state, action.payload];
        case CANCEL_ORDER:
            return state.filter((item) => item.id !== action.payload);
        default: return state;
    }
}