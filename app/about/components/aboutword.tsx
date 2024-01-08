import Image from "next/image";
import React from "react";
import Slide from "../../utils/Slide";
import FramerText from "../../utils/Framer";
import TextLeft from "../../utils/TextLeft";

const AboutWord = () => {
  return (
    <Slide>
      <div className="min-h-full md:px-9">
        <div className="p-5 grid md:grid-cols-3 grid-cols-1">
          <div className="mb-5">
            <button className="bg-black p-2 text-white rounded-xl">
              A few words about me
            </button>
          </div>
          <div className="col-span-2">
            <Slide>
              <div className="md:text-4xl text-xl text-justify uppercase">
                As a Fullstack Developer, I bring a unique blend of expertise
                and individuality to every project.
              </div>
            </Slide>
            <div className="grid md:grid-cols-2 grid-cols-1 my-10 gap-4 text-justify">
              <div>
                As a Jr Fullstack Developer, I architect and build the backbone
                of digital solutions. My proficiency spans both frontend and
                backend technologies, enabling me to create cohesive,
                high-performance applications. I specialize in utilizing
                cutting-edge frameworks like React, NextJs and UI library on the
                frontend, while seamlessly integrating with backend technologies
                such as Node.js, Express JS and Prisma.
              </div>
              <div>
                I thrive on overcoming challenges and turning complex ideas into
                functional solutions. Whether it's optimizing user interfaces
                for an intuitive experience or architecting a resilient backend
                infrastructure, I bring creativity and innovation to every
                project. My problem-solving skills extend to optimizing code,
                enhancing performance, and implementing best practices for
                secure and scalable applications.
              </div>
            </div>
            <div>
              <button className="bg-black mx-2 text-white my-1 p-1 rounded-2xl w-[100px]">
                <a href="/contact">Contact</a>
              </button>
              <button className="bg-zinc-200 mx-2 text-black my-1   p-1 rounded-2xl w-[100px]">
                <a href="/project">Work</a>
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <TextLeft>
              <Image
                src="/image/me2.jpg"
                width={1080}
                height={1080}
                quality={100}
                className="w-full rounded-2xl "
                alt="Image about"
              ></Image>
            </TextLeft>
          </div>
          <div>
            <TextLeft>
              <Image
                src="/image/me.PNG"
                width={1080}
                height={1080}
                quality={100}
                className="w-full rounded-2xl "
                alt="Image about"
              ></Image>
            </TextLeft>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default AboutWord;
