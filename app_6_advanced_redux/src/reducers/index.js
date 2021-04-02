import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { spinnerReducer } from "./spinnerReducer";
const rootReducer = combineReducers({
  contactReducer,
  spinner: spinnerReducer,
});

export default rootReducer;
