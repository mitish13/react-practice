import React from "react";
import firebase from "./fireabase";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    firebase
      .messaging()
      .getToken()
      .then((token) =>
        axios.post("http://localhost:3005/registration-token", { token: token })
      )
      .catch((err) => console.log(err));
  });

  return (
    <div>
      Hello, Check the console
      <br />
      <br />
    </div>
  );
};

firebase.messaging().onMessage((response) => console.log(response));

export default App;
