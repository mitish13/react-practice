//file to render and put our app between root div
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const EntryPoint = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDom.render(<EntryPoint />, document.getElementById("root"));
