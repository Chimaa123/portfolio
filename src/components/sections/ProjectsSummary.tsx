import React from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import ProjectSummaryItem from "../atom/ProjectSummaryItem";
import { GridList, Typography } from "@material-ui/core";
import useHorizontalScroll from "../../fns/horizontalScroll";
interface Props {
  projects: ProjectType[];
}

function ProjectsSummary({ projects }: Props) {
  const classes = useStyles();

  const scrollRef = useHorizontalScroll();

  return (
    <div id={"summary"} className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        Projects
      </Typography>
      <GridList ref={scrollRef} className={classes.row}>
        {projects.map((project) => (
          <ProjectSummaryItem {...project} />
        ))}
      </GridList>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    height: "100vh",
    width: "100vw",
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
}));

export default ProjectsSummary;
