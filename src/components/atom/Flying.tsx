import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as FeaterSvg } from "../../assets/svgs/feather.svg";
import { ReactComponent as PathSvg } from "../../assets/svgs/path.svg";

function Flying() {
  const classes = useStyles();

  useEffect(() => {
    const path = document.getElementById("path");
    const dot = document.getElementById("dot");
    let pathPosition: any;
    let pathTotalLength = 0;
    if (path) {
      pathPosition = path.getBoundingClientRect();
      // @ts-ignore
      pathTotalLength = path.getTotalLength();
      path.style.strokeDasharray = pathTotalLength + " " + pathTotalLength;
      path.style.strokeDashoffset = pathTotalLength + "";
    }

    function draw() {
      const relativePageOffset = window.pageYOffset + window.innerHeight / 2;
      // -pathPosition.top + (window.pageYOffset + window.innerHeight);
      const relativePageHeight = pathPosition.height;
      // document.body.offsetHeight - window.innerHeight;

      const scrollPercentage = relativePageOffset / relativePageHeight;
      const draw = pathTotalLength * scrollPercentage;
      if (path) {
        console.log(
          "pageoffset",
          pathTotalLength,
          relativePageHeight,
          path.scrollHeight,
          path.offsetHeight
        );
        // @ts-ignore
        const pt = path.getPointAtLength(pathTotalLength + draw);
        if (dot) {
          dot.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");
        }
        path.style.strokeDashoffset = pathTotalLength + draw + "";
        if (scrollPercentage >= 0.99) {
          path.style.strokeDasharray = "none";
        } else {
          path.style.strokeDasharray = pathTotalLength + " " + pathTotalLength;
        }
      }
    }
    window.addEventListener("scroll", draw);
    return () => {
      window.removeEventListener("scroll", draw);
    };
  }, []);

  return (
    <div className={classes.root}>
      <PathSvg className={classes.svg} />
      <FeaterSvg id="dot" className={classes.circle} />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    position: "absolute",
    display: "flex",
    top: 0,
  },
  svg: {
    zIndex: 10,
    width: "100vw",
    overflow: "visible",
  },
  circle: {
    position: "absolute",
    zIndex: 100,
    width: 200,
    height: 200,
    left: 0,
    top: "-1rem",
  },
});

export default Flying;
