import React from "react";
import { Link } from "react-router-dom";

function HomeParalax() {
  return (
    <>
      <section className="bg-red-200 h-screen flex ">
        <div className="bg-blue-300 p-44">
          <h1 className="text-6xl font-semibold text-gray-800 uppercase ">
            Hi, I am Tommy
          </h1>
          <h2 className="text-xl tracking-wide text-gray-700 uppercase mt-4">
            Front-End React Developer
          </h2>
          <Link
            className="inline-block mt-8 py-2 px-4 rounded bg-orange-400 text-white
           hover:border-orange-400
           hover:border 
           hover:text-orange-400
           hover:bg-white"
            to="/"
          >
            See my projects
          </Link>
        </div>
        <div>image</div>
      </section>
    </>
  );
}

export default HomeParalax;
