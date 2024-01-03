import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
const middleware = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware)); // reducer한개만이 아닐 땐 combineReducer를 이용해서 1개로 합쳐야함.

export default store;
