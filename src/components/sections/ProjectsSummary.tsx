import React from "react";
import { ProjectType } from "../../interfaces";
interface Props {
  projects: ProjectType[];
}
function ProjectsSummary({ projects }: Props) {
  return (
    <div className="App">
      {projects.map((project) => (
        <div>{project.title}</div>
      ))}
    </div>
  );
}

export default ProjectsSummary;
