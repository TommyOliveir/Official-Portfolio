import React from "react";

function ProjectListCard(props) {
  return (
    <>
      <div className="w-full sm:w-1/4   m-4 flex flex-col justify-start items-start rounded overflow-hidden border border-gray-300">
        <div className="w-full bg-blue-400 h-40 ">image</div>
        <div className="p-4 border  h-full flex flex-col flex-wrap w-full">
          <h2> {props.name}</h2>
          <p>{props.description}</p>
          <button className="bg-orange-300 px-4 py-1 rounded mt-4">View on Github</button>
         
        </div>

        
      </div>
    </>
  );
}

export default ProjectListCard;
