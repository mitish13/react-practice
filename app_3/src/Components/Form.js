import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form = ({
  name,
  age,
  editIntro,
  setEditIntro,
  setName,
  setAge,
  onClickHandler,
}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={onClickHandler}>
      <TextField
        label="Name"
        required
        placeholder="Enter name"
        value={editIntro ? editIntro.name : name}
        onChange={
          editIntro
            ? (e) =>
                setEditIntro({
                  name: e.target.value,
                  age: editIntro.age,
                  id: editIntro.id,
                })
            : (e) => setName(e.target.value)
        }
      />
      <TextField
        label="Age"
        required
        placeholder="Enter age"
        type="number"
        value={editIntro ? editIntro.age : age}
        onChange={
          editIntro
            ? (e) =>
                setEditIntro({
                  age: e.target.value,
                  name: editIntro.name,
                  id: editIntro.id,
                })
            : (e) => setAge(e.target.value)
        }
      />
      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: "20px" }}
        type="submit"
      >
        {editIntro ? "Edit" : "Add"}
      </Button>
    </form>
  );
};

export default Form;
