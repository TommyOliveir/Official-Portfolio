import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faSquareJs, faReact, faSass, faGit, faGithub  } from '@fortawesome/free-brands-svg-icons'




function Skills() {
  return (
    <section className="">
      <div id="skills" className="py-16 py-32 skill-details items-center flex flex-col border-4 border-green-400 p-4">
        <h2 className=" text-4xl font-bold ">Skills</h2>
        <p className="text-center text-base mt-4">I have a broad range of skills that will enable me to be a valuable member of your team. </p>
        <div className="mt-16 sm:flex sm:flex-wrap gap-8 justify-center w-2/3 m-auto grid grid-cols-2 border border-red-400 ">
        
        {/* <FontAwesomeIcon icon={faHtml5} /> */}
          
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="html.svg" alt="" />HTML5</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="css.svg" alt="" />CSS</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="javascript.svg" alt="" />Javascript</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="react.svg" alt="" />React</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="git-icon.svg" alt="" />Git</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="github-icon.svg" alt="" />GitHub</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="tailwindcss.svg" alt="" />Tailwind Css</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="sass.svg" alt="" />Sass</div>
          <div className="flex flex-col justify-between text-center p-4  min-w-32 sm:w-32"><img src="bootstrap.svg" alt="" />Bootstrap</div>
        
        </div>
      </div>
    </section>
  );
}

export default Skills;
