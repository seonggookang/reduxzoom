import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewReducer from "./views/reducer";
import commnetsReducer from "./comments/reducer";

const rootReducer = combineReducers({
  views: viewReducer,
  subscribers: subscribersReducer,
  comments: commnetsReducer,
});

export default rootReducer;
