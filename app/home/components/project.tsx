"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slide from "../../utils/Slide";
import ProjectsHome from "../../utils/DataProjectHome";
import FramerText from "../../utils/Framer";

const leftSkill = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Project = () => {
  return (
    <Slide>
      <motion.section
        id="skill"
        variants={leftSkill}
        animate="visible"
        initial="hidden"
        className="mt-24 min-h-full md:px-9"
      >
        <FramerText>
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 justify-center md:mt-10   ">
            <div className="md:my-0 my-10  md:mt-0 mt-10 ">
              <button className="py-2 px-8 bg-black font-semibold text-white rounded-2xl hover:bg-white hover:text-black shadow-md hover:shadow-2xl transition duration-500">
                Work
              </button>
            </div>
            <div className="text-center">
              <h1 className="text-5xl">A FEW SELECTED WORKS </h1>
              <br />
              <div className="p-5 text-justify">
                Greetings! I'm a Fullstack Developer dedicated to transforming
                digital landscapes through innovative and robust solutions. My
                portfolio is a testament to my passion for creating seamless
                online experiences across a variety of industries. Let's dive
                into the realms of my diverse web development projects!
              </div>
            </div>
          </div>
        </FramerText>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 justify-center md:mt-0 mt-10 gap-5">
          {ProjectsHome.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="p-5 shadow-2xl border border-gray-300 rounded-2xl">
                  <Slide>
                    <Image
                      src={project.image}
                      width={400}
                      height={400}
                      quality={100}
                      className="w-full"
                      alt="image project"
                    />
                  </Slide>
                  <div className="flex justify-between mt-5">
                    <div className="p-2 text-2xl">{project.name}</div>
                    <button className="p-2 bg-black text-white rounded-xl w-28">
                      <a href={project.link} target="blank">
                        View
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <FramerText>
            <button className="bg-black text-white text-xl p-5 rounded-md">
              <a href="/project">View all project</a>
            </button>
          </FramerText>
        </div>
      </motion.section>
    </Slide>
  );
};

export default Project;
