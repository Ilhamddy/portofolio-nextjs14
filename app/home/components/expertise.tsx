"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slide from "../../utils/Slide";
import FramerText from "../../utils/Framer";
import TextLeft from "../../utils/TextLeft";

const Expertise = () => {
  const section = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 2 },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <Slide>
      <motion.section
        id="project"
        variants={section}
        initial="hidden"
        animate="visible"
        className=""
      >
        <div className=" mt-24 min-h-full md:px-9  grid md:grid-cols-1 grid-cols-1 text-center">
          {/* <TextLeft>  */}
          <div className="p-5 flex flex-col justify-center">
            <h1 className="text-4xl">HOW CAN I HELP</h1>
            <div className="py-5">
              Embark on a collaborative journey with me to elevate your digital
              presence. Together, we can turn ideas into impactful and scalable
              web solutions, driving your business goals to new heights. Explore
              my portfolio, and contact me for your next digital masterpiece!
            </div>
            <div className="mt-5">
              <button className="items-start">
                <a
                  href="/contact"
                  className="bg-black hover:bg-gray-400 text-white rounded-full  py-3 px-8 shadow-md hover:shadow-2xl transition duration-500"
                >
                  Contact Me
                </a>
              </button>
            </div>
          </div>
          {/* </TextLeft> */}
          {/* <TextLeft>
            <div className="p-5 flex flex-col justify-center">
              <div className="bg-slate-500 p-5 text-white">
                <div className="flex items-center">
                  <Image
                    src="/next js.png"
                    width={100}
                    height={100}
                    alt="project"
                  />
                  Web Design
                </div>
                <div className="">
                  Greetings! I'm a Fullstack Developer dedicated to transforming
                  digital landscapes through innovative and robust solutions. My
                  portfolio is a testament to my passion for creating seamless
                  online experiences across a variety of industries. Let's dive
                  into the realms of my diverse web development projects!
                </div>
              </div>
            </div>
          </TextLeft> */}
        </div>
      </motion.section>
    </Slide>
  );
};

export default Expertise;
