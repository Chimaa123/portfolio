import React, { useState } from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";
import { Typography } from "@material-ui/core";

const AutoSwipe = virtualize(SwipeableViews);
const ReactSwipe = autoPlay(AutoSwipe);

function ProjectDetailItem({ title, description, photos }: ProjectType) {
  const classes = useStyles();
  const [activeIndex, setIndex] = useState(0);

  const swipeOptions = {
    disableLazyLoading: true,
    autoplay: photos.length > 1,
    interval: 5000,
    index: 0,
    springConfig: {
      duration: "1s",
      easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
      delay: "0s",
    },
    onChangeIndex: (index: number) => {
      setIndex(0);
    },
    enableMouseEvents: true,
  };

  const preventDragHandler = (e: any) => {
    e.preventDefault();
  };

  const slideRenderer = ({ key, index }: { key: any; index: number }) => {
    const i = Math.abs(index % photos.length);
    return (
      <div>
        <img
          key={"image" + index}
          alt="promo"
          draggable={false}
          onDragStart={preventDragHandler}
          className={classes.photo}
          src={"images" + photos[i]}
        />
      </div>
    );
  };

  const pagination = (
    <div className={classes.paginationContainer}>
      {photos.map((photo, index) => (
        <div
          className={activeIndex === index ? classes.tabSelected : classes.tab}
        />
      ))}
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography variant={"h5"} className={classes.title}>
          {title}
        </Typography>
        <Typography variant={"subtitle2"} className={classes.desc}>
          {description}
        </Typography>
      </div>
      <div className={classes.right}>
        <ReactSwipe {...swipeOptions} slideRenderer={slideRenderer} />
        {pagination}
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    minHeight: 400,
    // padding: '5rem'
  },
  left: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
  },
  right: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },
  photo: {
    height: "60%",
    width: "40%",
    objectFit: "cover",
  },
  title: {
    fontWeight: "bolder",
    margin: 20,
    textAlign: "left",
    color: "white",
  },
  paginationContainer: {
    display: "flex",
    flexDirection: "row",
  },
  tab: {
    width: 2,
    height: 2,
    borderRadius: 2,
  },
  tabSelected: {
    width: 4,
    height: 2,
    borderRadius: 2,
  },
  desc: {
    marginLeft: 20,
    textAlign: "left",
    color: "white",
  },
});

export default ProjectDetailItem;
