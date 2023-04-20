import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

function HomeParalax() {
  return (
    <>
    
    <Hero/>
    <About/>
    <Skills/>
    </>
  );
}

export default HomeParalax;
