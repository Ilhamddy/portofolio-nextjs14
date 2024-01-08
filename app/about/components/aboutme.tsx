import React from "react";
import Slide from "../../utils/Slide";
import FramerText from "../../utils/Framer";

const AboutMe = () => {
  return (
    <Slide>
      <div className="mt-24 h-screen md:px-9 md:flex items-center">
        <div className="p-5 grid grid-cols-1">
          <FramerText>
            <div className="md:text-6xl text-3xl my-12 text-start uppercase">
              expertise in crafting comprehensive and innovative solutions
              front-end and back-end technologies.
            </div>
          </FramerText>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 md:mb-32 mb-16">
            <div></div>
            <div>
              <div className="mb-5 text-justify">
                Welcome to my world! As a full-stack developer, I am fervently
                dedicated to sculpting digital experiences that not only
                encapsulate the core of your brand but also act as catalysts for
                business expansion. My passion lies in constructing
                comprehensive and dynamic solutions that elevate user engagement
                and foster substantial business development.
              </div>
              <button className="bg-black text-white m-1 p-1 rounded-2xl w-[100px]">
                Contact
              </button>
              <button className="bg-zinc-200 text-black m-1   p-1 rounded-2xl w-[100px]">
                Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default AboutMe;
