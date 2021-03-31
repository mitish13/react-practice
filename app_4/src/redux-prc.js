//this is a redux practice code, indepenedent with react
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

//reducer
//only thing which is connected to our store

const rootReducer = (state = initialState, action) => {
  // state change and return new state according to type of action
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscribe
store.subscribe(() => {
  console.log("[subscribe:]", store.getState());
});

//action
const increment = () => {
  return {
    type: "INC_COUNTER",
  };
};

const add = () => {
  return {
    type: "ADD_COUNTER",
    payload: 5,
  };
};

// dispatch :: will be called by component
store.dispatch(increment());
store.dispatch(add());
