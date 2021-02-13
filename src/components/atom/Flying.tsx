import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as FeaterSvg } from "../../assets/svgs/feather.svg";
import { ReactComponent as PathSvg } from "../../assets/svgs/path.svg";
import { ReactComponent as WelcomeSvg } from "../../assets/svgs/welcome.svg";

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
          //   dot.style.transform = `translate(
          // 	${pathPosition.left + pathPoint.x}px,
          // 	${pathPosition.top + pathPoint.y}px
          // )`;
        }
      }
    }

    function draw() {
      const relativePageOffset = // ΩΩwindow.pageYOffset;
        -pathPosition.top + (window.pageYOffset + window.innerHeight);
      const relativePageHeight = //pathPosition.height
        document.body.offsetHeight - window.innerHeight;

      const scrollPercentage = relativePageOffset / relativePageHeight;
      console.log(
        "pageoffset",
        relativePageOffset,
        relativePageHeight,
        scrollPercentage
      );
      const draw = pathTotalLength * scrollPercentage;
      if (path) {
        // @ts-ignore
        const pt = path.getPointAtLength(pathTotalLength - draw);

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
      {/*<WelcomeSvg className={classes.welcome} />*/}
      <PathSvg className={classes.svg} />
      <FeaterSvg id={"dot"} className={classes.circle} />
    </div>
  );
}

const useStyles = makeStyles({
  main: {},
  root: {
    position: "absolute",
    display: "flex",
    top: 0,
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50%",
    justifyContent: "flex-start",
  },
  welcome: {
    width: "100vw",
  },
  svg: {
    transform: "rotate(180deg)",
    width: "100vw",
    overflow: "visible",
  },
  circle: {
    // transform: "rotate(180deg)",
    position: "absolute",
    // zIndex: 100,
    width: 200,
    height: 200,
    bottom: 0,
    left: "50%",
    // top: "-1rem",
    // left: "-1rem",
  },
});

export default Flying;
