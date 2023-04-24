import React from "react";
import ProjectDetail from "./ProjectDetail";
import { projectsData } from "../../projectsData";

function Projects() {
  const displayProjects = projectsData.map(data => {
       return   <ProjectDetail name={data.name} /> 
    })
  return (
    <section className="py-16">
      <h1 className="text-center my-4 text-4xl font-bold ">Projects</h1>
      <div className="mt-16 border border-red-500 sm:w-5/6 mx-auto flex flex-wrap justify-center" > {displayProjects}</div>

    </section>
  );
}

export default Projects;
