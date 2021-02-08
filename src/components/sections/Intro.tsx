import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { greycb } from "../../Theme";
import Lottie from "react-lottie";
import lotties from "../../assets/lotties";

function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Lottie
        height={200}
        width={300}
        options={{
          loop: true,
          autoplay: true,
          animationData: lotties.about,
        }}
      />
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5rem",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  about: {
    color: greycb,
  },
  left: {
    fontSize: 15,
    fontWeight: "bold",
    textDecoration: "none",
    padding: 10,
  },
  right: {
    color: greycb,
  },
});

export default Intro;
