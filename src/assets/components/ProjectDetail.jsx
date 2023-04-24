import React from "react";

function ProjectDetail(props) {
  return (
    <>
     
        <div className="w-32 h-32 p-4 bg-red-500 m-4 flex justify-center items-center text-center">{props.name}</div>
      
    </>
  );
}

export default ProjectDetail;
