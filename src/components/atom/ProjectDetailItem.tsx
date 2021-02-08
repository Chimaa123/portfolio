import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

function ProjectDetailItem({ title, description }: ProjectType) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h3"} className={classes.title}>
        {title}
      </Typography>
      <Typography variant={"subtitle2"} className={classes.desc}>
        {description}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 400,
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
  },
  desc: {
    textAlign: "left",
    color: "white",
  },
});

export default ProjectDetailItem;
