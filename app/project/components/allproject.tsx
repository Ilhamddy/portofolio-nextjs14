import Image from "next/image";
import React from "react";
import Slide from "../../utils/Slide";
import Projects from "../../utils/DataProject";
import FramerText from "../../utils/Framer";

const AllProject = () => {
  return (
    <Slide>
      <div className=" min-h-full md:px-9 ">
        <FramerText>
          <div className="px-5 text-center text-2xl">Explore My Project</div>
        </FramerText>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 justify-center md:mt-0 mt-10 gap-5">
          {Projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="p-5 shadow-2xl border border-gray-300 rounded-2xl">
                  <Slide>
                    <Image
                      src={project.image}
                      width={400}
                      height={400}
                      quality={100}
                      className="w-full  "
                      alt="image project"
                    />
                  </Slide>
                  <div className="flex justify-between mt-5">
                    <div className="p-2 text-2xl">{project.name}</div>
                    <button className="p-2 bg-black text-white rounded-xl w-28">
                      <a href={project.link}>View</a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          {/* <button className="bg-black text-white text-xl p-5 rounded-md">
            View all project
          </button> */}
        </div>
      </div>
    </Slide>
  );
};

export default AllProject;
