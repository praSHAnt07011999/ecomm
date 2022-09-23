const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
const SUBTRACT_FROM_TOTAL = 'SUBTRACT_FROM_TOTAL';
const CLEAR_TOTAL = 'CLEAR_TOTAL';

export const addToTotalAction = (payload) => {
    return {
        type: ADD_TO_TOTAL,
        payload: payload
    }
}

export const subtractFromTotalAction = (payload) => {
    return {
        type: SUBTRACT_FROM_TOTAL,
        payload: payload
    }
}

export const clearTotalAction = () => {
    return {
        type: CLEAR_TOTAL
    }
}