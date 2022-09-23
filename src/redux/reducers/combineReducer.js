import { combineReducers } from "redux";
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { cartTotalReducer } from './cartTotalReducer';
import { orderReducer } from "./orderReducer";


export const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    cartTotalReducer,
    orderReducer
});