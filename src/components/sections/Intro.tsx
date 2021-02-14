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
              src={process.env.PUBLIC_URL + "/images/chimeg_profile_opt.png"}
            />
          </div>
        </div>
        <div className={classes.right}>
          <Typography variant={"subtitle1"} className={classes.about}>
            I specialize in developing front end applications using various
            technologies such as react native, react and android.
          </Typography>
          <Typography variant={"subtitle1"} className={classes.about}>
            My responsibilities are handling various technical aspects like
            coding of modules using the given design specifications, debugging
            and fixing the defects as well as analysing its root cause.
          </Typography>
          <br />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5rem",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
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
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  border: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem",
    width: BORDER,
    height: BORDER,
    borderRadius: BORDER,
    background: "linear-gradient(to top, #dc6014, #6772e5)",
  },
  img: {
    backgroundColor: grey21,
    padding: 5,
    position: "absolute",
    width: BORDER - 16,
    height: BORDER - 16,
    borderRadius: BORDER - 16,
    opacity: 0.8,
  },
}));

export default Intro;
