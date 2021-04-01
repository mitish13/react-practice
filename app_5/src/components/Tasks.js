import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);

  console.log(tasks);
  return (
    <div>
      {tasks.length === 0 ? (
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          No tasks found!!
        </Typography>
      ) : (
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })
      )}
    </div>
  );
};

export default Tasks;
