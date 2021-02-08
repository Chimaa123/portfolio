import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import { HEADER_HEIGHT } from "./Header";
import { greyeb } from "../../Theme";
import lotties from "../../assets/lotties";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <div className={classes.lottie}>
          <Lottie
            height={200}
            width={200}
            options={{
              loop: true,
              autoplay: true,
              animationData: lotties.coffee,
            }}
          />
        </div>
        <Typography variant={"h2"} className={classes.name}>
          learn more about each
        </Typography>
        <Typography variant={"h6"} className={classes.name}>
          img elements must have an alt
        </Typography>
      </div>
      <img
        className={classes.img}
        alt={"profile"}
        src={"images/chimeg_profile.png"}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - " + HEADER_HEIGHT + "px)",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    paddingLeft: "5rem",
    alignSelf: "flex-start",
    paddingBottom: 100,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "100vw",
  },
  name: {
    fontWeight: "bolder",
    paddingLeft: "5rem",
    color: greyeb,
  },
  img: {
    marginRight: "5rem",
    width: "60vh",
    height: "60vh",
    borderRadius: "40vw",
    alignSelf: "flex-end",
    opacity: 0.6,
  },
});

export default About;
