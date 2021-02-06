import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import ProjectSummaryItem from "../atom/ProjectSummaryItem";
import { grey21 } from "../../Theme";
import { GridList, Typography } from "@material-ui/core";
interface Props {
  projects: ProjectType[];
}
function ProjectsSummary({ projects }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        Projects
      </Typography>
      <GridList cols={2.5} className={classes.row}>
        {projects.map((project) => (
          <ProjectSummaryItem {...project} />
        ))}
      </GridList>
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
  row: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bolder",
    marginBottom: "3rem",
  },
});

export default ProjectsSummary;
