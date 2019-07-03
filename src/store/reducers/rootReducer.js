import authReducer from "./authReducer";
import showsReducer from "./showsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  shows: showsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
