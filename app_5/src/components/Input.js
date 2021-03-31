import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/index";

const Input = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);

  return (
    <div>
      <input
        type="text"
        value={task.title}
        onChange={(e) => dispatch(addTask({ title: e.target.value }))}
      />
    </div>
  );
};

export default Input;
