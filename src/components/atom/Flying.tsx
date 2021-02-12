import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as FeaterSvg } from "../../assets/svgs/feather.svg";
import { ReactComponent as PathSvg } from "../../assets/svgs/path.svg";

function Flying() {
  const classes = useStyles();

  useEffect(() => {
    // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
    const path = document.getElementById("path");
    const dot = document.getElementById("dot");
    let pathPosition: any;
    // @ts-ignore
    let pathTotalLength = 0;
    if (path) {
      pathPosition = path.getBoundingClientRect();
      // @ts-ignore
      pathTotalLength = path.getTotalLength();
      // @ts-ignore
      path.style.strokeDasharray = pathTotalLength + " " + pathTotalLength;
      // @ts-ignore
      path.style.strokeDashoffset = pathTotalLength;
    }
    function positionElements() {
      // SVG passes center of screen

      if (path && pathPosition) {
        const relativePageOffset =
          -pathPosition.top + (window.pageYOffset + window.innerHeight * 0.5);

        const pointPercentage = relativePageOffset / pathPosition.height;
        const pointOnPath = pointPercentage * pathTotalLength;

        // @ts-ignore
        const pathPoint = path.getPointAtLength(pointOnPath);
        if (dot) {
          // @ts-ignore
          dot.style.transform = `translate(
			${pathPosition.left + pathPoint.x}px,
			${pathPosition.top + pathPoint.y}px
		)`;
        }
      }
    }

    function draw() {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      console.log(
        "scrolHeihgt",
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      scrollPercentage =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      const draw = pathTotalLength * scrollPercentage;
      if (path) {
        // @ts-ignore
        const pt = path.getPointAtLength(draw);

        console.log(
          "scrollPercentage",
          scrollPercentage,
          pathTotalLength,
          draw
        );
        console.log("scrollPercentage pt", pt);
        if (dot) {
          dot.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");
        }
        // @ts-ignore
        path.style.strokeDashoffset = `${pathTotalLength - draw}`;
        if (scrollPercentage >= 0.99) {
          path.style.strokeDasharray = "none";
        } else {
          path.style.strokeDasharray = pathTotalLength + " " + pathTotalLength;
        }
      }
    }

    function onScroll() {
      draw();
      // positionElements();
    }

    console.log("path", path);
    console.log("dot", dot);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <PathSvg className={classes.svg} />
      <FeaterSvg id={"dot"} className={classes.circle} />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    position: "absolute",
    display: "flex",
    top: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  svg: {
    width: "100vw",
    marginTop: '50%',
    overflow: "visible",
    transform: "rotate(180deg)",
  },
  circle: {
    position: "absolute",
    zIndex: 100,
    width: 200,
    height: 200,
    top: "-1rem",
    left: "-1rem",
  },
});

export default Flying;
