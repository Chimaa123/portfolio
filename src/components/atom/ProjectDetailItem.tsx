import React, { useState } from "react";
import { ProjectType } from "../../interfaces";
import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const AutoSwipe = virtualize(SwipeableViews);
const ReactSwipe = autoPlay(AutoSwipe);
interface Props extends ProjectType {
  index: number;
}
function ProjectDetailItem({
  title,
  subtitle,
  description,
  duty,
  photos,
  index,
}: Props) {
  const classes = useStyles();
  const [activeIndex, setIndex] = useState(0);

  const swipeOptions = {
    disableLazyLoading: true,
    autoplay: photos.length > 1,
    interval: 3000,
    index: activeIndex,
    springConfig: {
      duration: "1s",
      easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
      delay: "0s",
    },
    onChangeIndex: (index: number) => {
      setIndex(index);
    },
    enableMouseEvents: true,
  };

  const preventDragHandler = (e: any) => {
    e.preventDefault();
  };

  const slideRenderer = ({ key, index }: { key: any; index: number }) => {
    const i = Math.abs(index % photos.length);
    return (
      <img
        key={"image" + index}
        alt="promo"
        draggable={false}
        onDragStart={preventDragHandler}
        className={classes.photo}
        src={process.env.PUBLIC_URL + "/images" + photos[i]}
      />
    );
  };

  const photosNode = (
    <ReactSwipe
      {...swipeOptions}
      className={classes.paginationContainer}
      slideRenderer={slideRenderer}
    />
  );

  const pagination = (
    <div className={classes.paginationContainer}>
      {photos.map((photo, index) => {
        const i = Math.abs(activeIndex % photos.length);
        return (
          <div className={index === i ? classes.tabSelected : classes.tab} />
        );
      })}
    </div>
  );

  return (
    <div className={classes.root} id={"project" + index}>
      <Typography variant={"h4"} className={classes.title}>
        {title + " " + subtitle}
      </Typography>
      <div className={classes.contentContainer}>
        <div className={classes.left}>
          <Typography variant={"body1"} className={classes.desc}>
            {description}
          </Typography>
          <Typography variant={"h6"} className={classes.dutyTitle}>
            Used technologies:
          </Typography>
          {duty.map((d) => (
            <Typography variant={"subtitle2"} className={classes.duty}>
              ● {d}
            </Typography>
          ))}
        </div>
        <div className={classes.right}>
          {photosNode}
          {pagination}
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem 5rem",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 30px",
      width: "60%",
    },
  },
  photo: {
    width: "100%",
    objectFit: "contain",
    maxHeight: 500,
    borderRadius: 8,
  },
  dutyTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    textWeight: "bolder",
    color: "white",
  },
  desc: {
    margin: "20px 0px",
    textAlign: "left",
    color: "white",
    lineHeight: 1,
  },
  duty: {
    textAlign: "left",
    color: "white",
  },
  title: {
    fontWeight: "bolder",
    marginBottom: 40,
    textAlign: "center",
    color: "white",
  },
  paginationContainer: {
    borderRadius: 8,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    width: 6,
    height: 6,
    borderRadius: 6,
    margin: 6,
    backgroundColor: "white",
  },
  tabSelected: {
    width: 40,
    height: 6,
    borderRadius: 6,
    margin: 6,
    backgroundColor: "white",
  },
}));

export default ProjectDetailItem;
