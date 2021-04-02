import * as constant from "../constants/actionTypes";

export const spinnerReducer = (state = true, action) => {
  switch (action.type) {
    case constant.SPINNER:
      console.log("in case");
      return action.payload;
    default:
      return state;
  }
};
