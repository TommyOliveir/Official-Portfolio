import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {

  
  return (
    <section className="w-full">
      <div className=" flex flex-col sm:flex-row justify-end  ">
        <div
          id="socials-image"
          className="w-full sm:flex items-center  sm:w-1/2"
        >
          <div className="social-images invisible sm:visible ">
            <ul
              border
              className="pl-4 flex sm:flex-col justify-center gap-9 sm:gap-1 m-0 "
            >
              <motion.li
               
                className="text-5xl"
              >
                <motion.a
                  href="https://www.linkedin.com/in/tommy-oliveir-larida/"
                  target="_blank"
                >
                  {" "}
                  <i class="ri-linkedin-box-fill"></i>
                </motion.a>
              </motion.li>

              <motion.li
              
              
                className="text-5xl"
              >
                <a href="https://github.com/TommyOliveir" target="_blank">
                  {" "}
                  <i class="ri-github-fill"></i>
                </a>
              </motion.li>
            </ul>
          </div>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="image m-auto justify-center  w-2/3 sm:w-1/2"
          >
            <img className="" src="Tommyboo.png" alt="" />
          </motion.div>
        </div>
        <div id="hero-details" className="w-full sm:w-1/2 ">
          <div className=" px-4 sm:pl-4 pt-16 sm:pt-40  ">
            <div>
              <h1 className="m-0 text-4xl font-semibold text-gray-800 xl:text-5xl  ">
                Hi, I am{" "}
                <span className="text-orange-300  font-bold uppercase">
                  Tommy
                </span>
              </h1>
              <h1 className=" text-4xl mt-4 font-bold text-gray-800 xl:text-5xl  ">
                I build value through design.
              </h1>
              <h2 className="text-xl  tracking-wide text-gray-700 uppercase mt-4 xl:text-2xl">
                Front-End React Developer
              </h2>
              <div className="links">
                <Link
                  className="block sm:inline-block xl:text-lg mt-12 py-2 px-4 rounded bg-white text-orange-300 border-solid border border-orange-300 sm:w-40 text-center
          hover:border-orange-300
          hover:text-white
          hover:bg-orange-300"
                  to="/"
                >
                  See Projects
                </Link>
                <Link
                  className="block sm:inline-block sm:ml-8 xl:text-lg mt-8  py-2 px-4 rounded bg-orange-300 text-white border-solid border border-orange-300  sm:w-40 text-center
          hover:border-orange-300 
          hover:text-orange-300
          hover:bg-white"
                  to="/"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
