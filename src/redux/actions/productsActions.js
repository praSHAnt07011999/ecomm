const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

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

export const updateProduct = (payload) => {
    return {
        type: UPDATE_PRODUCT,
        payload: payload
    }
}