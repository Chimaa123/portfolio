import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, Typography } from "@material-ui/core";
import ContactItem from "../atom/ContactItem";
import contacts from "../../datas/contacts.json";

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        Contact Me
      </Typography>
      <GridList cols={2.5} className={classes.row}>
        {contacts.map((contact) => (
          <ContactItem {...contact} />
        ))}
      </GridList>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bolder",
    marginBottom: "3rem",
  },
});

export default Contact;
