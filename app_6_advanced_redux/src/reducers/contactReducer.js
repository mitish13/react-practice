import * as constant from "../constants/actionTypes";

const initialState = {
  contacts: "",
};
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.FETCH_CONTACTS:
      return {
        contacts: action.payload,
      };
    case constant.DELETE_CONTACT:
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
