import React, { useState } from "react";
import { ProjectType } from "../../interfaces";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const AutoSwipe = autoPlay(SwipeableViews);
function ProjectDetailItem({ title, description, duty, photos }: ProjectType) {
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

  const photosNode = (
    <AutoSwipe {...swipeOptions} className={classes.paginationContainer}>
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
    </AutoSwipe>
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
      <Typography variant={"h4"} className={classes.title}>
        {title}
      </Typography>
      <Typography variant={"subtitle1"} className={classes.desc}>
        {description}
      </Typography>
      <div className={classes.row}>
        <div className={classes.left}>
          <Typography variant={"h5"} className={classes.dutyTitle}>
            Job responsibilities:
          </Typography>
          {duty.map((d) => (
            <Typography variant={"subtitle2"} className={classes.desc}>
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
    padding: "5rem",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
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
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
  photo: {
    width: "100%",
    objectFit: "contain",
    maxHeight: 500,
  },
  dutyTitle: {
    fontWeight: "bold",
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
    margin: "20px 30px",
    textAlign: "center",
    color: "white",
  },
  paginationContainer: {
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
