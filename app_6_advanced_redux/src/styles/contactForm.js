import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "1px solid gray",
    marginTop: "10px",
    borderRadius: "10px",
    float: "left",
    backgroundColor: "rgba(200,200,200,0.5)",
  },
  [theme.breakpoints.only("lg")]: {
    card: {
      marginRight: "10px",
    },
  },

  heading: {
    color: "#002884",
    fontFamily: "'Courier New', 'monospace'",
    backgroundColor: "rgba(200,200,200,0.5)",
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
