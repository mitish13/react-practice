// fetch all contact + add contact + edit + delete
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../actions/contactActions";
import ContactCard from "./ContactCard";
import useStyles from "../styles/contactForm";
import { Grid } from "@material-ui/core";
import Search from "./SearchContact";

import { Typography, Button, CircularProgress, Badge } from "@material-ui/core";
import { ContactPhone } from "@material-ui/icons";
import { Link } from "react-router-dom";

const MainScreen = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contactReducer);
  const spinner = useSelector((state) => state.spinner);
  console.log(spinner);
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div>
      <Badge
        badgeContent={contacts.length}
        color="primary"
        style={{ margin: "10px" }}
      >
        <ContactPhone />
      </Badge>
      <br />
      <Search />
      <br />
      <Link to="/add" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" className={classes.submit}>
          Add Contact
        </Button>
      </Link>
      {spinner ? (
        <CircularProgress />
      ) : contacts.length !== 0 ? (
        <Grid container spacing={2}>
          {contacts.map((contact) => {
            return <ContactCard contact={contact} key={contact.id} />;
          })}
        </Grid>
      ) : (
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          No contact found!!
        </Typography>
      )}
    </div>
  );
};

export default MainScreen;
