import authReducer from "./authReducer";
import showsReducer from "./showsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  shows: showsReducer,
  firestore: firestoreReducer
});

export default rootReducer;
