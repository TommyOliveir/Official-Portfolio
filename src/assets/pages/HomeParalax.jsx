import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function HomeParalax() {
  return (
    <>
    
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    </>
  );
}

export default HomeParalax;
