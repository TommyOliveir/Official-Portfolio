import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";

export default function Header() {
  const [isOpenBurger, setIsOpenBurger] = React.useState(false)
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
function handleClickBurger() {
  setIsOpenBurger(prev => !prev)
  console.log("click")
}

  return (
    <header className="sm:items-center relative flex justify-between sm:p-8 bg-orange-400 w-full ">
      <Link className="p-4 sm:p-0 site-logo text-white tracking-wider font-bold"  to="/">
        Tommy
      </Link>
      <div className="p-4 sm:hidden z-10 text-center " onClick={handleClickBurger}>{isOpenBurger ? <i class="ri-close-circle-line"></i>: <i class="ri-menu-line"></i>}</div>
      <nav className={`${isOpenBurger ? "visible" : "invisible"}  sm:visible p-6 bg-orange-400 w-full absolute text-white  border border-red-400 gap-8 flex-col flex sm:flex-row sm:static sm:p-0 sm:justify-end sm:items-baseline  text-white  text-xl`}>
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
