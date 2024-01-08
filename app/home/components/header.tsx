"use client";
import { motion } from "framer-motion";

import Slide from "../../utils/Slide";
const textLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};
const imageHeader = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
  hidden: {
    opacity: 0,
    y: -250,
  },
};
const Header = () => {
  return (
    <Slide>
      <section
        id="header"
        // variants={section}
        // initial="hidden"
        // animate="visible"
        className="h-screen md:flex items-center "
      >
        <div className="max-w-screen-2xl mt-24 ">
          <div className="  around-xl rounded-br-[80px] md:p-9 px-4">
            <div className=" flex flex-col justify-center items-center md:py-20 py-16 gap-10">
              {/* banner image */}
              <motion.div
                variants={imageHeader}
                initial="hidden"
                animate="visible"
                className="md:w-5/5"
              >
                {/* <img src={banner} alt="" className='lg:h-[386px]' /> */}
                <h2 className="text-black  xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-bold text-second mb-6">
                  Jr Fullstack Developer
                </h2>
              </motion.div>
              {/* Banner content */}
              <div className="md:w-4/5 ">
                <motion.div
                  variants={textLeft}
                  initial="hidden"
                  animate="visible"
                  className="md:pb-12 text-justify text-black"
                >
                  I am a highly skilled Fullstack Developer with a passion for
                  crafting seamless and efficient digital solutions. With a
                  strong foundation in both front-end and back-end technologies,
                  I specialize in creating robust web applications that meet the
                  unique needs of startups and established businesses alike. My
                  goal is to empower clients with a dynamic online presence,
                  enabling them to achieve their business objectives and enhance
                  user engagement.
                  <br />
                  <br />
                </motion.div>
                <div>
                  <button className=" bg-black hover:bg-gray-400 text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500">
                    <a href="#about">Get Started</a>
                  </button>
                  <button className="py-3 px-8 font-semibold text-black mx-5 my-5 rounded-full hover:bg-black hover:text-white shadow-md hover:shadow-2xl transition duration-500">
                    <a
                      target="_blank"
                      href="/contact"
                      // href="https://www.linkedin.com/in/ilhammaulana1/"
                    >
                      Contact
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default Header;
