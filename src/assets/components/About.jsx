import React, { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

function About() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className="px-4 order-4 border-red-400 text-white bg-orange-300 mt-4 sm:mt-0  ">
      <div
        id="about"
        className="py-16 flex flex-col sm:flex-row border border-red-900 sm:items-center cursor-pointer"
      >
        <div className="sm:w-1/2 border border-red-900 sm:p-16">
          <h1 className="text-4xl xl:text-5xl font-bold ">Nice to meet you</h1>
          <h4 className="mt-4 tracking-wide leading-normal text-gray-900">
            A Self-motivated, creative IT professional with Bachelor’s Degree in
            Information Technology and passionate about creating customized
            solutions and visual designs. I have completed the front-end
            development career path on scrimba.com with knowledge and
            proficiency in{" "}
            <span className="font-bold text-gray-900">
              HTML, CSS, JavaScript, REACT JS Library, Tailwind CSS, SASS,
              Bootstrap, Git/GitHub,
            </span>{" "}
            and mobile responsive front-end development.
          </h4>
        </div>

        <div
          id="video"
          className="relative border border-red-900 mt-8 sm:mt-0 sm:w-1/2"
        >
          <img
            onClick={() => setModalOpen(true)}
            className="hover:scale-75 transition-all hover:ease-in w-full"
            src="play.svg"
            alt=""
          />
          {isModalOpen &&
            createPortal(
              <Modal onClose={() => setModalOpen(false)} />,
              document.body
            )}
        </div>
      </div>
    </section>
  );
}

export default About;
