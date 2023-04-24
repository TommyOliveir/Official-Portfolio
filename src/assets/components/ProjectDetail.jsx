import React from "react";

function ProjectDetail(props) {
  return (
    <>
     
        <div className="w-32 sm:w-1/4 h-32 p-4 bg-red-500 m-4 flex flex-col justify-between items-center text-center">
          <div className="w-full bg-blue-400 h-16">
            image
          </div>
          {props.name}

          <div className="self-start">

          <button>preview</button>
          </div>
        </div>
     
     
    </>
  );
}

export default ProjectDetail;
