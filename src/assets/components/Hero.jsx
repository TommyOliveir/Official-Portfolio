import React from 'react'
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="bg-red-200 h-screen flex flex-col sm:flex-row justify-end  ">

    <div id="socials-image" className=" border sm:flex items-center  border-red-600 sm:w-1/2">

      <div className="social-images  invisible sm:visible ">
        
        <ul border className="border border-purple-500 flex sm:flex-col justify-center gap-9 sm:gap-1 ">
          <li className='text-5xl'> <i class="ri-linkedin-box-fill" ></i></li>
          <li className='text-5xl'> <i class="ri-github-fill"></i></li>
        </ul>
      </div>

      <div className="image border m-auto justify-center border-green-500 w-2/3 sm:w-1/2" >
      <img src="Tommyboo.png" alt="" />
      </div>
    </div>
    <div className="w-screen sm:w-1/2 ">
      <div className="bg-white px-4 sm:pl-4 pt-16 sm:pt-40  ">
        <div>
          <h1 className=" text-4xl font-semibold text-gray-800 xl:text-5xl  ">
            Hi, I am{" "}
            <span className="text-orange-400  font-bold uppercase">
              Tommy
            </span>
          </h1>
          <h1 className="text-4xl mt-4 font-bold text-gray-800 xl:text-5xl  ">
            I build value through design.
          </h1>
          <h2 className="text-xl  tracking-wide text-gray-700 uppercase mt-4 xl:text-2xl">
            Front-End React Developer
          </h2>
          <div className="bg-red-300">
            <Link
              className="block sm:inline-block xl:text-lg mt-12 py-2 px-4 rounded bg-white text-orange-400 border-solid border border-orange-400 sm:w-40 text-center
          hover:border-orange-400
          hover:text-white
          hover:bg-orange-400"
              to="/"
            >
              See Projects
            </Link>
            <Link
              className="block sm:inline-block ml-8 xl:text-lg mt-8  py-2 px-4 rounded bg-orange-400 text-white border-solid border border-orange-400 sm:w-40 text-center
          hover:border-orange-400 
          hover:text-orange-400
          hover:bg-white"
              to="/"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero