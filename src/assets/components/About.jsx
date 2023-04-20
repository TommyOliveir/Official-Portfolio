import React, { useState } from "react";
import YouTubeVideo from "./YouTubeVideo";

function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="px-4 py-6 border-4 border-red-400 text-white bg-orange-300 mt-4 sm:mt-0 ">
      <div className="flex flex-col sm:flex-row border border-red-900 sm:items-center cursor-pointer">
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
          <h2 className="text-xl hover:text-xl hover:bg-red-400 transition-all hover:ease-in absolute left-5 sm:left-40 top-1/3 ">
            Play video
          </h2>
          <img
            className="hover:scale-75 transition-all hover:ease-in w-full"
            src="play.svg"
            alt=""
          />
        </div>
      </div>
      <div className="modal hidden fixed bg-gray-900 left-0 top-0  h-screen w-full opacity-50">
      <div className="video">
        modal video
       <YouTubeVideo/>
      </div>
      </div>
    </section>
  );
}

export default About;
