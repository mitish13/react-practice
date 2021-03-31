import Form from "./Components/Form";
import { useState } from "react";
import Intros from "./Components/Intros";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [intro, setIntro] = useState([]);
  const [editIntro, setEditIntro] = useState();

  const id = Math.round(Math.random() * 100);

  const addIntro = () => {
    if (!editIntro) {
      setIntro([{ id: id, name: name, age: age }, ...intro]);
      setName("");
      setAge("");
    } else {
      intro.forEach((each) => {
        if (each.id === editIntro.id) {
          each.name = editIntro.name;
          each.age = editIntro.age;
        }
      });

      setIntro(intro);
      setEditIntro();
    }
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    addIntro();
  };
  return (
    <div style={containerStyle()}>
      <Form
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
        onClickHandler={ClickHandler}
        editIntro={editIntro}
        setEditIntro={setEditIntro}
      />

      <Intros intros={intro} setIntro={setIntro} setEditIntro={setEditIntro} />
      {intro.length === 0 ? <p>No information found!!</p> : null}
    </div>
  );
};

const containerStyle = () => {
  return {
    margin: "20px",
    border: "1px solid black",
    padding: "20px",
  };
};
export default App;
