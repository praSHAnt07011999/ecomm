import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./reducers/combineReducer";

export const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);