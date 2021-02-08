import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

function ProjectSummaryItem({ title, photo }: ProjectType) {
  const classes = useStyles();
  console.log("photo", photo);
  return (
    <div key={title} className={classes.root}>
      <img src={"images" + photo} className={classes.image} />
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleBar: {
    zIndex: 100,
    position: "absolute",
  },
  title: {
    color: "white",
  },
  image: {
    width: 157,
    height: 277,
    objectFit: "cover",
    marginLeft: "15rem",
    borderRadius: 8,
  },
});

export default ProjectSummaryItem;
