import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

import TextArea from "../components/TextArea";


function HomeParalax() {
  return (
    <>
    
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
   <TextArea/>
   
    </>
  );
}

export default HomeParalax;
