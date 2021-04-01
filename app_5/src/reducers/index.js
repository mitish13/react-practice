import { combineReducers } from "redux";
import { task } from "./taskReducer.js";

const rootReducer = combineReducers({
  task,
});

export default rootReducer;
