import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../styles/contactForm";

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.heading}>
        &lt;Contact Manager/&gt;
      </Typography>
    </div>
  );
};

export default Header;
