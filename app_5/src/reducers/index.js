import { combineReducers } from "redux";
import { task } from "./taskReducer.js";
import { authReducer } from "./authReducer.js";

const rootReducer = combineReducers({
  task,
  auth: authReducer,
});

export default rootReducer;
