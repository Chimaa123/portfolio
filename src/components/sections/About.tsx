import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { HEADER_HEIGHT } from "./Header";
import { greyeb } from "../../Theme";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Typography variant={"h2"} className={classes.name}>
          Gombo Enkhchimeg
        </Typography>
        <Typography variant={"h6"} className={classes.name}>
          Front End Developer
        </Typography>
        <Typography variant={"subtitle1"} className={classes.name}>
          I am a creative problem solver, flexible and adaptable team player who
          affects the work atmosphere positively.
        </Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - " + HEADER_HEIGHT + "px)",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("${process.env.PUBLIC_URL}/images/coffee_bg_mobile.png")`,
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url("${process.env.PUBLIC_URL}/images/coffee_bg.png")`,
    },
  },
  lottie: {
    paddingLeft: "5rem",
    alignSelf: "flex-start",
    paddingBottom: 100,
  },
  text: {
    paddingTop: "20%",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
  },
  name: {
    fontWeight: "bolder",
    paddingLeft: "5rem",
    paddingRight: "5rem",
    color: greyeb,
  },
  img: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    opacity: 0.6,
  },
}));

export default About;
