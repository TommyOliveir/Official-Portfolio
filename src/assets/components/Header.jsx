import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header className="flex justify-between p-4 bg-orange-400">
      <Link className="site-logo text-white tracking-wider font-bold"  to="/">
        Tommy
      </Link>
      <nav className="flex gap-4 invisible sm:visible mr-32">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Skill
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
}
