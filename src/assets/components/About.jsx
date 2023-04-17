import React from "react";

function About() {
  return (
    <section className="px-4 py-6 border-4 border-red-400 text-white bg-orange-400 mt-4 sm:mt-0 ">
      <div className="">
        <div className="">
          <h1 className="text-4xl xl:text-5xl font-bold ">Nice to meet you</h1>
          <h4 className="mt-4 tracking-wide leading-normal text-gray-900">
            A Self-motivated, creative IT professional with Bachelor’s Degree in
            Information Technology and passionate about creating customized
            solutions and visual designs. I have completed the front-end
            development career path on scrimba.com with knowledge and
            proficiency in <span className="font-bold text-gray-900">HTML, CSS, JavaScript, REACT JS Library, Tailwind
            CSS, SASS, Bootstrap, Git/GitHub,</span> and mobile responsive front-end
            development.
          </h4>
        </div>

        <div id="video">video here
        <img src="play.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
