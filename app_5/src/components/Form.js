import { useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useStyle } from "../styles";
import { add } from "../Actions/index";
import { editTask } from "../Actions/index";

const Form = () => {
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state) => state.task.taskToEdit);
  console.log(taskToEdit);

  const classes = useStyle();
  const [state, setState] = useState({
    task: "",
    date: "",
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setState({ task: "", date: "" });
    if (!taskToEdit) {
      dispatch(
        add({
          id: Math.round(Math.random() * 100),
          task: state.task,
          date: state.date,
        })
      );
    } else {
      dispatch(
        editTask({
          id: taskToEdit.id,
          task: state.task,
          date: state.date,
        })
      );
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <Container>
          <TextField
            required
            rowsMax={10}
            label="task"
            variant="outlined"
            value={state.task}
            name="task"
            className={classes.TextField}
            onChange={changeHandler}
          />

          <TextField
            required
            type="date"
            variant="outlined"
            name="date"
            value={state.date}
            className={classes.TextField}
            onChange={changeHandler}
          />
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            className={classes.button}
          >
            {taskToEdit ? <>Edit Task </> : <>Add Task </>}
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default Form;
