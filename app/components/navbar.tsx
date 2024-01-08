"use client";

import { useState } from "react";
// icon import
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "About", path: "/about" },
    { link: "Project", path: "/project" },
    { link: "Contact", path: "/contact" },
  ];

  const menuSlide = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section>
      <nav className="bg-white md:px-14 p-5 w-screen-2xl md:mx-auto  text-black fixed  z-50 top-0 right-0 left-0 ">
        <div className="text-lg container mx-auto flex justify-between font-medium">
          {/* navbar */}
          <div className="container flex space-x-14 justify-between  items-center">
            <div>
              <a
                href="/"
                className="text-2xl font-semibold flex items-center space-x-3 text-black"
              >
                <span>Ilhamddy</span>
              </a>
            </div>
            {/* showing nav items */}
            <div>
              <ul className="md:flex hidden space-x-12 lg:flex ">
                {navItems.map(({ link, path }) => (
                  <a key={link} href={path} className=" hover:text-gray-300">
                    {link}
                  </a>
                ))}
              </ul>
            </div>
          </div>

          {/* menu btn , only display mobile */}
          <div className="md:hidden mr-5">
            <button
              onClick={toogleMenu}
              className="text-white focus:outline-none fixed focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-black" />
              ) : (
                <FaBars className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen ? (
        <motion.div
          variants={menuSlide}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="lg:hidden md:hidden space-y-4 px-4 pt-24 pb-5 bg-white text-black text-center text-2xl z-10 fixed top-0 right-0 left-0 md:h-0 h-full uppercase font-light">
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-gray-300">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </section>
  );
};

export default Navbar;
