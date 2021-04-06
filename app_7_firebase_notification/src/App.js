import React from "react";
import firebase from "./fireabase";
import { useEffect, useState } from "react";

const App = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    firebase
      .messaging()
      .getToken()
      .then((token) => setToken(token))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      Hello+ {token} <br />
      <br />
    </div>
  );
};

firebase.messaging().onMessage((response) => console.log(response));

export default App;
