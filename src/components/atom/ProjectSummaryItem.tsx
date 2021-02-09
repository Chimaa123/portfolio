import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

function ProjectSummaryItem({ title, main_photo }: ProjectType) {
  const classes = useStyles();
  return (
    <div key={title} className={classes.root}>
      <img
        src={process.env.PUBLIC_URL + "/images" + main_photo}
        className={classes.image}
      />
      <div className={classes.titleBar}>
        <Typography variant={"h5"} className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  titleBar: {
    zIndex: 2,
    width: 300,
    position: "absolute",
  },
  title: {
    color: "white",
  },
  image: {
    width: 157,
    height: 277,
    objectFit: "cover",
    margin: "0px 50px 0px 100px",
    backgroundColor: "black",
    opacity: 0.6,
    borderRadius: 8,
  },
});

export default ProjectSummaryItem;
