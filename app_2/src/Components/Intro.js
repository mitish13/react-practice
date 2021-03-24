const Intro = ({ intro, DeleteHandler, EditHandler }) => {
  return (
    <div>
      <p style={parastyle()}>
        Hii, my name is {intro.name}, I'm {intro.age} years old.
      </p>
      <button onClick={() => DeleteHandler(intro.id)} style={btnStyle()}>
        X
      </button>
      <button onClick={() => EditHandler(intro.id)} style={btnStyle()}>
        Edit
      </button>
    </div>
  );
};

const parastyle = () => {
  return {
    fontFamily: "sans-serif",
    fontSize: "20px",
    border: "1px solid grey",
    boxShadow: "0px 1px 0px 1px rgba(60,60,60,0.3)",
    color: "black",
    width: "max-content",
    padding: "20px",
    marginTop: "10px",
    display: "inline-block",
  };
};
const btnStyle = () => {
  return {
    marginLeft: "10px",
    padding: "5px",
    fontSize: "15px",
    fontWeight: "700",
  };
};
export default Intro;
