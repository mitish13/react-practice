// combine all reducer to give it to store
import { combineReducers } from "redux";
import { counter } from "./counter";
import { auth } from "./isLogged";

const rootReducer = combineReducers({
  count: counter,
  signIn: auth,
});

export default rootReducer;
