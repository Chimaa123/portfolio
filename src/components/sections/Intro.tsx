import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { grey21 } from "../../Theme";

function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={"h3"} className={classes.title}>
        About
      </Typography>
      <div className={classes.row}>
        <div className={classes.left}>
          <Typography variant={"subtitle1"} className={classes.about}>
            A creative problem solver, flexible and adaptable team player who
            affects the work atmosphere positively.
          </Typography>
        </div>
        <div className={classes.right}>
          <Typography variant={"subtitle1"} className={classes.about}>
            A creative problem solver, flexible and adaptable team player who
            affects the work atmosphere positively.
          </Typography>
          <br />
          <Typography variant={"subtitle1"} className={classes.about}>
            A creative problem solver, flexible and adaptable team player who
            affects the work atmosphere positively.
          </Typography>
          <br />
          <Typography variant={"subtitle1"} className={classes.about}>
            A creative problem solver, flexible and adaptable team player who
            affects the work atmosphere positively.
          </Typography>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: grey21,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: "violet",
  },
  about: {
    color: "white",
  },
  left: {
    fontSize: 15,
    fontWeight: "bold",
    textDecoration: "none",
    padding: 10,
  },
  right: {
    color: "white",
  },
});

export default Intro;
