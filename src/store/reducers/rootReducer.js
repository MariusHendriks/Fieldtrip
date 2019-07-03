import authReducer from "./authReducer";
import showsReducer from "./showsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  shows: showsReducer
});

export default rootReducer;
