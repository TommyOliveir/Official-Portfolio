import React from "react";
import ProjectListCard from "./ProjectListCard";
import { projectsData } from "../../projectsData";

function Projects() {
  const displayProjects = projectsData.map(data => {
       return   <ProjectListCard name={data.name} description={data.description}/> 
    })
  return (
    <section className="py-16">
      <h1 className="text-center my-4 text-4xl font-bold ">Projects</h1>
      <div className="mt-16 border border-red-500 sm:w-5/6 mx-auto flex flex-wrap justify-center" > {displayProjects}</div>

    </section>
  );
}

export default Projects;
