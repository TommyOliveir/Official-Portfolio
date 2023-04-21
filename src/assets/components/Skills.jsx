import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faSquareJs, faReact, faSass, faGit, faGithub  } from '@fortawesome/free-brands-svg-icons'




function Skills() {
  return (
    <section>
      <div className="skill-details border-4 border-green-400 ">
        <h2>Skill</h2>
        <div className="flex flex-wrap gap-4 justify-center ">
       
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faHtml5} /></div>
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faCss3} /></div>
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faSquareJs } /></div>
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faReact } /></div>
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faSass } /></div>
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faGit } /></div>
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faGithub  } /></div>
          <div className="text-center p-4 bg-red-400 w-72"><FontAwesomeIcon icon={faSass } /></div>
        
        </div>
      </div>
    </section>
  );
}

export default Skills;
