import React from "react";

function ProjectDetail(props) {
  return (
    <>
      <div className="w-32 sm:w-1/4 h-32  bg-red-500 m-4 flex flex-col justify-between items-start">
        <div className="w-full bg-blue-400 h-16">image</div>
        <div>
          <h2> {props.name}</h2>
          <button className="bg-green-500">preview</button>
        </div>

        
      </div>
    </>
  );
}

export default ProjectDetail;
