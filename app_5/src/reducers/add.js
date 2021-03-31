export const task = (state = "", action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        id: Math.round(Math.random() * 100),
        title: action.payload.title,
        date: action.payload.date,
      };
    default:
      return state;
  }
};
