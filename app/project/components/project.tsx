import React from "react";
import Slide from "../../utils/Slide";
import FramerText from "../../utils/Framer";

const Projectme = () => {
  return (
    <Slide>
      <div className="mt-24 h-screen md:flex items-center md:px-9">
        <div className="p-5 grid grid-cols-1">
          <FramerText>
            <div className="md:text-6xl text-3xl my-12 text-start uppercase">
              Fullstack Developer | Crafting Digital Excellence EXPLORE MY
              Portofolio Project
            </div>
          </FramerText>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 md:mb-32 mb-16">
            <div></div>
            <div>
              <div className="mb-5 text-justify">
                Greetings! I'm a dedicated to transforming digital landscapes
                through innovative and robust solutions. My portfolio is a
                testament to my passion for creating seamless online experiences
                across a variety of industries. Let's dive into the realms of my
                diverse web development projects!
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

export default Projectme;
