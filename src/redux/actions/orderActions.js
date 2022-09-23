const PLACE_ORDER = 'PLACE_ORDER';
const CANCEL_ORDER = 'CANCEL_ORDER';

export const placeOrderAction = (items) => {
    return {
        type: PLACE_ORDER,
        payload: items
    }
}

export const cancelOrderAction = (orderId) => {
    return {
        type: CANCEL_ORDER,
        payload: orderId
    }
}