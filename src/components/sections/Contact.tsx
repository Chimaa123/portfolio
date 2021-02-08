import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ContactItem from "../atom/ContactItem";
import contacts from "../../datas/contacts.json";

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        Contact Me
      </Typography>
      <div className={classes.row}>
        {contacts.map((contact) => (
          <ContactItem {...contact} />
        ))}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
  },
  row: {
    display: "flex",
    transition: "flexDirection 1s ease",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bolder",
    marginBottom: "3rem",
  },
}));

export default Contact;
