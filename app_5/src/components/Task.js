import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { useStyle } from "../styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Actions/index";
import { editFormField } from "../Actions/index";
import { useSelector } from "react-redux";

const Task = ({ task }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.task.taskToEdit);
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };

  const editHandler = (id) => {
    dispatch(editFormField(id));
  };

  return (
    <List>
      <ListItem
        className={classes.list}
        style={
          id === task.id ? { border: "1px solid black", opacity: "0.7" } : null
        }
      >
        <ListItemText primary={task.task} secondary={task.date}></ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick={() => editHandler(task.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => deleteHandler(task.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default Task;
