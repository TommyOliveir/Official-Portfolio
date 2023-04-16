import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header className="flex justify-between p-8 bg-orange-400 w-full ">
      <Link className="site-logo text-white tracking-wider font-bold"  to="/">
        Tommy
      </Link>
      <nav className="flex gap-8 invisible sm:visible text-white  text-xl">
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
