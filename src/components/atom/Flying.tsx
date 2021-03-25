import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
      const relativePageOffset =
        window.pageYOffset + window.innerHeight - pathPosition.top;
      // -pathPosition.top + (window.pageYOffset + window.innerHeight);
      const relativePageHeight = pathPosition.height;
      // document.body.offsetHeight - window.innerHeight;

      const scrollPercentage = relativePageOffset / relativePageHeight;
      const draw = pathTotalLength * scrollPercentage;
      if (path) {
        path.style.strokeDashoffset = pathTotalLength + draw + "";
        // @ts-ignore
        const pt = path.getPointAtLength(pathTotalLength - draw);
        console.log(
          "pageoffset",
          window.pageYOffset,
          window.innerHeight,
          pathPosition.top
        );
        if (dot) {
          dot.setAttribute(
            "transform",
            "translate(" + (pt.x - 80) + "," + (pt.y - 420) + ")"
          );
        }
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
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "50%",
  },
  svg: {
    zIndex: 10,
    width: "100vw",
    overflow: "visible",
  },
});

export default Flying;
