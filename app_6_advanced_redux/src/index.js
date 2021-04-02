import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import axios from "./axios";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

axios.interceptors.request.use(
  (request) => {
    console.log(
      `${request.method.toUpperCase()} from ${request.baseURL + request.url}`
    );
    return request;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => {
    if (res.status !== 200 && res.status !== 201) {
      alert("unsual beheviour");
    }
    console.log(res);
    return res;
  },
  (err) => Promise.reject(err)
);

// contact manager: id ,  name , email , mobile number , descr
// - create json server using json-server package
// - actions: fetch , create , edit , delete , form field
// - sync: form field
// - async: all except sync
// - component: form , contact , contacts
// first screen : all contacts , button : add contact, edit and delete particular contact
// add/ : add new contact
// edit/ : edit received contact

//concepts to use
// axios , react-router-dom , interceptor , redux , redux-thunk , material-ui , service workers for pwa
