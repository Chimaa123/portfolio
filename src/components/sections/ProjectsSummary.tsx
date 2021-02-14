import React, { useState } from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import ProjectSummaryItem, { SUMMARY_WIDTH } from "../atom/ProjectSummaryItem";
import { GridList, Typography } from "@material-ui/core";
import useHorizontalScroll from "../../fns/horizontalScroll";
interface Props {
  projects: ProjectType[];
}

function ProjectsSummary({ projects }: Props) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useHorizontalScroll();

  const onScroll = (e: any) => {
    console.log("onScroll", e.target.scrollLeft, e.target.scrollWidth);
    const index = Math.ceil(e.target.scrollLeft / SUMMARY_WIDTH);
    setActiveIndex(index);
  };

  return (
    <div id={"summary"} className={classes.root}>
      <Typography variant={"h2"} className={classes.title}>
        My Works
      </Typography>
      <GridList ref={scrollRef} onScroll={onScroll} className={classes.row}>
        <div key={"title1"}>
          <div className={classes.paddingLeft} />
        </div>
        {projects.map((project, index) => (
          <ProjectSummaryItem
            {...project}
            activeIndex={activeIndex}
            index={index}
          />
        ))}
        <div key={"title2"}>
          <div className={classes.paddingRight} />
        </div>
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
    width: "100vw",
  },
  paddingLeft: {
    width: "20vw",
    height: 350,
  },
  paddingRight: {
    width: "60vw",
    height: 350,
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
