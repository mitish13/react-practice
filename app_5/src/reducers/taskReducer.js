import * as constant from "../Constants/taskAction";

const initialState = {
  tasks: [],
  taskToEdit: "",

  //form components state
  task: "",
  date: "",
};

export const task = (state = initialState, action) => {
  switch (action.type) {
    case constant.Add_TASK:
      return {
        tasks: [
          {
            id: action.payload.id,
            task: action.payload.task,
            date: action.payload.date,
          },
          ...state.tasks,
        ],
        taskToEdit: "",
      };

    case constant.DELETE_TASK:
      const tasksAfterDelete = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        tasks: tasksAfterDelete,
        taskToEdit: "",
      };
    case constant.EDIT_FORMFIELD:
      console.log(action.payload);
      const taskToEdit = state.tasks.find((task) => task.id === action.payload);
      return {
        ...state,
        taskToEdit: taskToEdit,
      };

    case constant.EDIT_TASK:
      //we are mutating the state, which will not re render component
      //   state.tasks.forEach((task) => {
      //     if (task.id === action.payload.id) {
      //       task.id = action.payload.id;
      //       task.task = action.payload.task;
      //       task.date = action.payload.date;
      //     }
      //   });
      const updatedTask = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            id: action.payload.id,
            task: action.payload.task,
            date: action.payload.date,
          };
        } else {
          return { ...task };
        }
      });
      console.log(updatedTask);
      return {
        tasks: updatedTask,
        taskToEdit: "",
      };

    case constant.TRACK_CHANGE_TASK:
      return { task: action.payload, ...state };
    default:
      return state;
  }
};
