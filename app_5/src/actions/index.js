// add todo
// edit todo
//delete todo
export const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload: data,
  };
};
