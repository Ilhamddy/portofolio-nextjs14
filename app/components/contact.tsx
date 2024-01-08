"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactLeft = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  return (
    <motion.section
      id="contact"
      variants={contactLeft}
      animate="visible"
      initial="hidden"
    >
      <div className="md:px-8 max-w-screen-2xl mx-auto mt-24 h-full">
        <div className="p-5 grid md:grid-cols-4 grid-cols-1  gap-2">
          <div className="my-5">Ilham Maulana</div>
          <div className="my-5">
            <ul>
              <li>Works</li>
              <li>Services</li>
              <li>About</li>
              <li>Jr Fullstack Developer</li>
              <li>Jr Front End Developer </li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="my-5">
            <ul>
              <li>Linkedln</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="my-5">
            <ul>
              <li>Ilhammaulana9906@gmail.com</li>
              <li>+6281252233382</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
