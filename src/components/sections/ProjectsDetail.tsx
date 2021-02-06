import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { grey21 } from "../../Theme";
import ProjectDetailItem from "../atom/ProjectDetailItem";
interface Props {
  projects: ProjectType[];
}
function ProjectsDetail({ projects }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {projects.map((project) => (
        <ProjectDetailItem {...project} />
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: grey21,
  },
});

export default ProjectsDetail;
