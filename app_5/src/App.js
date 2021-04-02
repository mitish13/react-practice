import React from "react";
import Form from "./Components/Form";
import { Typography, Container, Checkbox } from "@material-ui/core";
import { useStyle } from "./styles";
import Tasks from "./Components/Tasks";
import { toggleAuth } from "./Actions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);
  const onLogin = () => {
    dispatch(toggleAuth());
  };

  return (
    <div>
      <Typography variant="h4" className={classes.heading}>
        &lt;Task Manager/&gt;
      </Typography>
      <Checkbox onChange={onLogin} />
      Login
      <hr />
      {isLogin ? (
        <Container maxWidth="md">
          <Form />
          <Tasks />
        </Container>
      ) : (
        <Typography variant="h5">
          You need to logged in to use this app!!
        </Typography>
      )}
    </div>
  );
};

export default App;
