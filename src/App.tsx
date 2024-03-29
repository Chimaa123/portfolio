import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/sections/Header";
import Intro from "./components/sections/Intro";
import ProjectsSummary from "./components/sections/ProjectsSummary";
import ProjectsDetail from "./components/sections/ProjectsDetail";
import theme, { grey21 } from "./Theme";
import projects from "./datas/projects.json";
import { ThemeProvider } from "@material-ui/styles";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
import { ReactComponent as ThankuSvg } from "./assets/svgs/thanku.svg";
import { ReactComponent as WelcomeSvg } from "./assets/svgs/welcome.svg";

import { makeStyles } from "@material-ui/core/styles";
import Flying from "./components/atom/Flying";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Flying />
        <div className={classes.root}>
          <Header />
          <div id={"section0"}>
            <About />
          </div>
          <div id={"section0"}>
            <Intro />
          </div>
          <div id={"section1"}>
            <ProjectsSummary projects={projects} />
          </div>
          <div id={"section2"}>
            <ProjectsDetail projects={projects} />
          </div>
          <div id={"section3"}>
            <Contact />
            <ThankuSvg />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
const useStyles = makeStyles({
  root: {
    backgroundColor: grey21,
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 320,
  },
  inner: {
    padding: "3rem",
  },
});
export default App;
