import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { searchContact, fetchContacts } from "../actions/contactActions";
const SearchContact = () => {
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  const changeHandler = (event) => {
    const captureText = event.target.value;
    if (captureText === "") {
      dispatch(fetchContacts());
    }
    console.log(captureText);
    setTerm(captureText);

    dispatch(searchContact(captureText));
  };
  return (
    <TextField
      variant="outlined"
      label="Search by name"
      value={term}
      onChange={changeHandler}
    />
  );
};

export default SearchContact;
