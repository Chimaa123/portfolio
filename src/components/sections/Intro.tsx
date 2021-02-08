import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { grey21, greycb } from "../../Theme";
import Lottie from "react-lottie";
import lotties from "../../assets/lotties";

const BORDER = 200;
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
          <div className={classes.border}>
            <img
              className={classes.img}
              alt={"profile"}
              src={"images/chimeg_profile_opt.png"}
            />
          </div>
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
  border: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "3rem",
    width: BORDER,
    height: BORDER,
    borderRadius: BORDER,
    background: "linear-gradient(to top, #dc6014, #6772e5)",
  },
  img: {
    backgroundColor: grey21,
    padding: 5,
    position: "absolute",
    marginRight: "5rem",
    width: BORDER - 16,
    height: BORDER - 16,
    borderRadius: BORDER - 16,
    opacity: 0.8,
  },
});

export default Intro;
