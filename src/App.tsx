import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/sections/Header";
import Intro from "./components/sections/Intro";
import ProjectsSummary from "./components/sections/ProjectsSummary";
import ProjectsDetail from "./components/sections/ProjectsDetail";
import theme from "./Theme";
import projects from "./datas/projects.json";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Intro />
        <div id={"section0"}>
          <ProjectsSummary projects={projects} />
        </div>
        <div id={"section1"}>
          <ProjectsDetail />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
