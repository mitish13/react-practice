import React from "react";
import Form from "./Components/Form";
import { Typography, Container } from "@material-ui/core";
import { useStyle } from "./styles";
import Tasks from "./Components/Tasks";

const App = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h4" className={classes.heading}>
        &lt;Task Manager/&gt;
      </Typography>
      <hr />
      <Container maxWidth="md">
        <Form />
        <Tasks />
      </Container>
    </div>
  );
};

export default App;
