import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
const store = createStore(reducer);

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
