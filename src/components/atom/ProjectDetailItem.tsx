import React, { useState } from "react";
import { ProjectType } from "../../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";
import { Typography } from "@material-ui/core";

function ProjectDetailItem({ title, description, duty, photos }: ProjectType) {
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
          src={process.env.PUBLIC_URL + "/images" + photos[i]}
        />
      </div>
    );
  };

  const photosNode = (
    <div className={classes.paginationContainer}>
      {photos.map((photo, index) => (
        <img
          key={"image" + index}
          alt="promo"
          draggable={false}
          onDragStart={preventDragHandler}
          className={classes.photo}
          src={process.env.PUBLIC_URL + "/images" + photos[index]}
        />
      ))}
    </div>
  );

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
      <Typography variant={"h3"} className={classes.title}>
        {title}
      </Typography>
      <Typography variant={"subtitle1"} className={classes.desc}>
        {description}
      </Typography>
      <div className={classes.row}>
        <div className={classes.left}>
          <Typography variant={"h6"} className={classes.dutyTitle}>
            My Responsibility
          </Typography>
          <Typography variant={"subtitle2"} className={classes.desc}>
            {duty}
          </Typography>
        </div>
        <div className={classes.right}>
          {photosNode}
          {pagination}
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    minHeight: 400,
    padding: "5rem",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  left: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
  },
  right: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },
  photo: {
    height: "80%",
    width: "40%",
    margin: 20,
    objectFit: "cover",
  },
  dutyTitle: {
    marginBottom: 20,
    textWeight: "bolder",
    color: "white",
  },
  desc: {
    marginBottom: 20,
    textAlign: "left",
    color: "white",
  },
  title: {
    fontWeight: "bolder",
    margin: 20,
    textAlign: "center",
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
});

export default ProjectDetailItem;
