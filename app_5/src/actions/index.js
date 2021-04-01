import * as constants from "../Constants/taskAction";

export const add = (data) => {
  return {
    type: constants.Add_TASK,
    payload: data,
  };
};

export const fetchTask = () => {
  return {
    type: constants.FETCH_TASK,
  };
};

export const deleteTask = (id) => {
  return {
    type: constants.DELETE_TASK,
    payload: id,
  };
};

export const editFormField = (id) => {
  return {
    type: constants.EDIT_FORMFIELD,
    payload: id,
  };
};

export const editTask = (data) => {
  return {
    type: constants.EDIT_TASK,
    payload: data,
  };
};

export const trackChangeTask = (task) => {
  return {
    type: constants.TRACK_CHANGE_TASK,
    payload: task,
  };
};
