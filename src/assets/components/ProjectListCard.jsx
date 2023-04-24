import React from "react";

function ProjectListCard(props) {
  return (
    <>
      <div className="w-full sm:w-1/4   m-4 flex flex-col justify-between items-start rounded overflow-hidden border border-gray-300">
        <div className="w-full bg-blue-400 h-40 ">image</div>
        <div className="p-4">
          <h2> {props.name}</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iusto expedita suscipit distinctio, tempore reprehenderit excepturi assumenda recusandae. Fuga at accusantium reiciendis dignissimos minus alias maxime. Cum incidunt impedit dicta.</p>
          <button className="bg-orange-300 px-4 py-1 rounded mt-4">View on Github</button>
         
        </div>

        
      </div>
    </>
  );
}

export default ProjectListCard;
