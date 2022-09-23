const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'ADD_PRODUCT';

 export const addProductAction = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload: payload
    }
}

export const removeProductAction = (payload) => {
    return {
        type: REMOVE_PRODUCT,
        payload: payload
    }
}