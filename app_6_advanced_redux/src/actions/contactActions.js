import * as constant from "../constants/actionTypes";
import axios from "../axios";

export const fetchContacts = () => {
  return (dispatch) => {
    axios
      .get("/contacts") // baseurl :
      .then((res) => {
        dispatch(spinner(false));
        dispatch(getContacts(res.data));
      })
      .catch((e) => console.log(e));
  };
};

export const getContacts = (data) => {
  return {
    type: constant.FETCH_CONTACTS,
    payload: data,
  };
};

export const filterContacts = (id) => {
  return {
    type: constant.DELETE_CONTACT,
    payload: id,
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    axios
      .delete(`/contacts/${id}`)
      .then((res) => {
        dispatch(filterContacts(id));
      })
      .catch((err) => console.log(err));
  };
};

export const spinner = (value) => {
  return {
    type: constant.SPINNER,
    payload: value,
  };
};
