import React from "react";
import Reactdom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import reducer
import rootReducer from "./reducer/index";

//give it to ctore
const store = createStore(rootReducer);

Reactdom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
