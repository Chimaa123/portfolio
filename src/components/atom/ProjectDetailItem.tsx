import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { grey21 } from "../../Theme";

function ProjectDetailItem({ title, description }: ProjectType) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className="App-header">
        <p>{title}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </header>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: grey21,
    height: "100vh",
  },
});

export default ProjectDetailItem;
