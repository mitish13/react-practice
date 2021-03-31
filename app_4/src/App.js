import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./action/index";

const App = () => {
  const count = useSelector((state) => state.count);
  const login = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>hello</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h2>Count : {count}</h2>

      <button onClick={() => dispatch(isLogged())}>Login</button>

      {login ? <h1>Sensitive information</h1> : ""}
    </div>
  );
};

export default App;
