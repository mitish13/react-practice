import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "royalblue",
    fontFamily: "'Courier New', 'monospace'",
    backgroundColor: "black",
    borderRadius: "10px",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
