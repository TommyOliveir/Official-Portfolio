import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function HomeParalax() {
  return (
    <>
    
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </>
  );
}

export default HomeParalax;
