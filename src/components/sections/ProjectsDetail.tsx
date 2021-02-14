import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import ProjectDetailItem from "../atom/ProjectDetailItem";
interface Props {
  projects: ProjectType[];
}
function ProjectsDetail({ projects }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {projects.map((project, index) => (
        <ProjectDetailItem {...project} index={index} />
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
  },
});

export default ProjectsDetail;
