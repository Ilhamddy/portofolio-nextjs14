"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slide from "../../utils/Slide";
import TextLeft from "../../utils/TextLeft";
import FramerText from "../../utils/Framer";
import techStack from "../../utils/TechStack";
const leftAbout = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -50,
  },
};

const sosmed = [
  {
    link: "https://www.linkedin.com/in/ilhammaulana1/",
    name: "Linkedln",
  },
  {
    link: "https://www.instagram.com/ilhamddy",
    name: "Instagram",
  },
  {
    link: "https://www.twitter.com/",
    name: "Twitter",
  },
];
const About = () => {
  return (
    <Slide>
      <motion.div id="about" className="pt-24 md:px-9 bg-[#F3F3F3] ">
        <div className="  grid grid-cols-1 md:grid-cols-2 mt-6  justify-center ">
          <motion.div variants={leftAbout} initial="hidden" animate="visible">
            <div className="px-5">
              <Slide>
                <div>
                  <h1 className=" mt-10 text-xl font-extrabold ">About Me </h1>
                </div>
              </Slide>
              <Slide>
                <div className="flex justify-center md:mt-20 mt-0">
                  <Image
                    src="/me.jpg"
                    width={160}
                    height={160}
                    className="rounded-full"
                    alt="aboutme"
                  />
                </div>
              </Slide>

              <div className="md:mt-28 mt-0 ">
                <h1>Social Link </h1>

                <div className="mt-5">
                  {sosmed.map((social, idx) => {
                    return (
                      <button
                        key={idx}
                        className="bg-black hover:bg-white hover:text-black text-white rounded-full p-1 mx-2 w-[100px] shadow-md hover:shadow-2xl transition duration-500"
                      >
                        <a href={social.link}>{social.name}</a>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <br />
          </motion.div>
          <div>
            <TextLeft>
              <div className="p-5 text-justify">
                <h5>
                  Ilhamddy is a dedicated student who is currently enrolled in a
                  full-stack web development course at Purwhadhika. With a
                  strong foundation in computer science, ilhamddy has developed
                  an aptitude for learning new technologies and incorporating
                  them into innovative solutions.
                </h5>
              </div>
            </TextLeft>
            <TextLeft>
              <div className="p-5 text-justify">
                <h5>
                  To further enhance his skills, ilhamddy has actively
                  participated in coding competitions, hackathons, and
                  collaborative projects. This hands-on experience has allowed
                  him to develop critical thinking, problem-solving, and
                  teamwork skills, which are crucial for a successful career in
                  full-stack web development.
                </h5>
              </div>
            </TextLeft>
            <div className="flex md:justify-end justify-center p-5">
              <button className="py-2 px-8 bg-black font-semibold text-white  my-5 rounded-2xl hover:bg-white hover:text-black shadow-md hover:shadow-2xl transition duration-500">
                <a href="/about">Read More</a>
              </button>
            </div>
          </div>
        </div>
        <FramerText>
          <div className="p-5">
            <div>
              <h1 className=" my-10 text-xl font-extrabold text-center">
                PROUD TO BE AWARDED & KNOWN BY{" "}
              </h1>
            </div>
            <div className="py-5 grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-3">
              {techStack.map((img, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-5 flex items-center justify-center border-collapse  border border-slate-200 rounded"
                  >
                    <TextLeft>
                      <Image
                        src={img.image}
                        width={200}
                        height={200}
                        className="p-2"
                        alt="tech"
                      ></Image>
                    </TextLeft>
                  </div>
                );
              })}
            </div>
          </div>
        </FramerText>
      </motion.div>
    </Slide>
  );
};

export default About;
