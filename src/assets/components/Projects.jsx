import React from "react";
import ProjectDetail from "./ProjectDetail";
import { projectsData } from "../../projectsData";

function Projects() {
  const displayProjects = projectsData.map(data => {
       return   <ProjectDetail name={data.name} /> 
    })
  return (
    <section>
      <div>Projects</div>
     {displayProjects}
     
    </section>
  );
}

export default Projects;
