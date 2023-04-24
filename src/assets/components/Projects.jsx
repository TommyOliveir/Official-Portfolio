import React from "react";
import ProjectDetail from "./ProjectDetail";
import { projectsData } from "../../projectsData";

function Projects() {
  const displayProjects = projectsData.map(data => {
       return   <ProjectDetail name={data.name} /> 
    })
  return (
    <section>
      <h1 className="text-center my-4">Projects</h1>
      <div className="border border-red-500 sm:w-1/4 flex flex-wrap justify-center" > {displayProjects}</div>
   
     
    </section>
  );
}

export default Projects;
