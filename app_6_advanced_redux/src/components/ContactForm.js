import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../styles/contactForm";
import { CircularProgress } from "@material-ui/core";
//logical imports

import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { spinner } from "../actions/contactActions";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

export default function SignUp({ match }) {
  const id = match.params.id;
  const dispatch = useDispatch();

  const [state, setState] = useState({
    uname: "",
    mobileNum: "",
    email: "",
    desc: "",
    isSubmitted: false,
    isError: false,
  });

  useEffect(() => {
    if (id) {
      dispatch(spinner(true));
      axios
        .get(`/contacts/${id}`)
        .then(({ data }) => {
          dispatch(spinner(false));
          setState({
            uname: data.name,
            mobileNum: data.mobileNum,
            email: data.email,
            desc: data.desc,
            isError: false,
          });
        })
        .catch((e) => {
          console.log(e);
          dispatch(spinner(false));
          setState({ ...state, isError: true });
        });
    }
  }, [id]);
  const classes = useStyles();
  const isLoading = useSelector((state) => state.spinner);
  console.log(isLoading);
  //components level states

  //track changes in form
  const onChageHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //redirection login

  //submit logic
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!id) {
      axios
        .post(
          "/contacts",
          {
            id: Math.round(Math.random() * 100),
            name: state.uname,
            mobileNum: state.mobileNum,
            email: state.email,
            desc: state.desc,
          },
          {
            onUploadProgress: () => {
              dispatch(spinner(true));
            },
          }
        )
        .then(() => setState({ ...state, isSubmitted: true }))
        .catch((e) => console.log(e));
    } else if (id) {
      axios
        .patch(
          `/contacts/${id}`,
          {
            name: state.uname,
            mobileNum: state.mobileNum,
            email: state.email,
            desc: state.desc,
          },
          {
            onUploadProgress: () => {
              dispatch(spinner(true));
            },
          }
        )
        .then(() => {
          dispatch(spinner(false));
          setState({ ...state, isSubmitted: true });
        })

        .catch((e) => console.log(e));
    }
  };
  const getForm = () => {
    return (
      <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="uname"
              variant="outlined"
              required
              fullWidth
              label="Name"
              autoFocus
              value={state.uname}
              onChange={onChageHandler}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="number"
              variant="outlined"
              name="mobileNum"
              required
              fullWidth
              label="Mobile number"
              value={state.mobileNum}
              onChange={onChageHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              rowsMax={10}
              variant="outlined"
              name="desc"
              fullWidth
              label="Add description"
              value={state.desc}
              onChange={onChageHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              value={state.email}
              onChange={onChageHandler}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          {!id ? <>Add</> : <>Edit </>}
        </Button>
      </form>
    );
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      {isLoading ? <CircularProgress /> : null}

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {!id ? <>Add Contact</> : <> Edit Contact</>}
        </Typography>
        {state.isError ? (
          <Typography component="h5" variant="h5" style={{ color: "red" }}>
            Can't fetch the given record!!
          </Typography>
        ) : (
          getForm()
        )}
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "10px" }}
          fullWidth
        >
          Cancel
        </Button>
      </Link>
      {state.isSubmitted ? <Redirect to="/" /> : null}
    </Container>
  );
}
