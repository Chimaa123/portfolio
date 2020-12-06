import React from 'react';
import './App.css';
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import ProjectsSummary from "./sections/ProjectsSummary";
import ProjectsDetail from "./sections/ProjectsDetail";
import theme from "./Theme";
import projects from "./datas/projects.json";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Intro/>
      <Header/>
      <ProjectsSummary projects={projects}/>
      <ProjectsDetail/>
    </ThemeProvider>
  );
}

export default App;
