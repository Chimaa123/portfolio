import React, { useMemo } from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

interface Props extends ProjectType {
  activeIndex: number;
  index: number;
}
export const SUMMARY_WIDTH = 300;
function ProjectSummaryItem({
  title,
  subtitle,
  main_photo,
  activeIndex,
  index,
}: Props) {
  const classes = useStyles();
  const truncated = useMemo(() => subtitle.substring(0, 20), []);

  const handlePress = () => {};

  return (
    <div key={title} id={index + "sum"} onClick={handlePress}>
      <a
        href={"/portfolio/#project" + index}
        className={classes.root}
        style={index === activeIndex ? { opacity: 1 } : {}}
      >
        <img
          src={process.env.PUBLIC_URL + "/images" + main_photo}
          className={classes.image}
        />
        <div className={classes.titleBar}>
          <Typography variant={"h4"} className={classes.title}>
            {title}
          </Typography>
          <Typography variant={"h5"} className={classes.subtitle}>
            {truncated}
          </Typography>
        </div>
      </a>
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
    height: 400,
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  titleBar: {
    zIndex: 2,
    width: 300,
    position: "absolute",
  },
  title: {
    width: 200,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    width: 200,
    color: "white",
    marginTop: 8,
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
