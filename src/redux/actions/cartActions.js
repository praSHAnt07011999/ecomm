const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload: payload
    }
}

export const clearCart = () => {
    return {
        type:CLEAR_CART
    }
}
