import Intro from "./Intro";

const Intros = ({ intros, setIntro, setEditIntro }) => {
  //   console.log(intros);
  const DeleteHandler = (id) => {
    const newIntros = intros.filter((intro) => intro.id !== id);
    setIntro(newIntros);
  };

  const EditHandler = (id) => {
    const editIntro = intros.find((intro) => intro.id === id);
    setEditIntro(editIntro);
  };

  return (
    <div>
      {intros.map((intro) => {
        return (
          <Intro
            key={intro.id}
            intro={intro}
            DeleteHandler={DeleteHandler}
            EditHandler={EditHandler}
          />
        );
      })}
    </div>
  );
};

export default Intros;
