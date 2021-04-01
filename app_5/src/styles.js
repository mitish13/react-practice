import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  heading: {
    color: "#002884",
    backgroundColor: "rgba(200,200,200,0.5)",
    borderRadius: "10px",
    textAlign: "center",
  },

  list: {
    backgroundColor: "lightgray",
  },
  button: {
    marginLeft: "10px",
    marginTop: "10px",
  },
  TextField: {
    marginRight: "10px",
  },
  [theme.breakpoints.only("xs")]: {
    button: {
      marginTop: "10px",
      marginLeft: "0px",
    },
    TextField: {
      marginTop: "10px",
      width: "130px",
    },
  },
}));
