import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faSquareJs, faReact, faSass, faGit, faGithub  } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  const [rotate, setRotate] = React.useState(false);

  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  function handleClickBurger() {
    setIsOpenBurger((prev) => !prev);
    console.log("click");
  }

  return (
    <header className="sm:items-center relative flex justify-between sm:p-8 bg-orange-300 w-full ">
      <Link
        className="p-4 sm:p-0 site-logo text-white tracking-wider font-bold"
        to="/"
      >
        <motion.p
          animate={{ rotate: rotate ? 360 : 0 }}
          transition={{ duration: 1 }}
          onMouseEnter={() => setRotate(!rotate)}
        >
          <FontAwesomeIcon icon={faSquare  } />
        </motion.p>
      </Link>
      <div
        className="p-4 sm:hidden z-10 text-center "
        onClick={handleClickBurger}
      >
        {isOpenBurger ? (
          <i class="ri-close-circle-line"></i>
        ) : (
          <i class="ri-menu-line"></i>
        )}
      </div>
      <nav
        className={`${
          isOpenBurger ? "visible" : "invisible"
        }  sm:visible p-6 bg-orange-300 w-full absolute text-white  border border-red-400 gap-8 flex-col flex sm:flex-row sm:static sm:p-0 sm:justify-end sm:items-baseline  text-white  text-xl`}
      >
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
