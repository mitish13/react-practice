import { combineReducers } from "redux";
import { task } from "./add";

const allReducers = combineReducers({
  task: task,
});

export default allReducers;
