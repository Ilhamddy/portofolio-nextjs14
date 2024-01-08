"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import React, { useState } from "react";

const FrameMotion = () => {
  const [isVisible, setisVisible] = useState(true);

  const boxClick = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  return (
    <motion.div className=" md:px-14 p-0 md:p-4  max-w-screen-2xl mx-auto">
      {/* <button
        onClick={() => setisVisible(!isVisible)}
        className="divide-amber-500"
      >
        show/hide
      </button> */}
      {/* {isVisible && ( */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 border-collapse  border border-slate-500 rounded-lg"
        initial="hidden"
        animate="visible"
        variants={boxClick}
        transition={{
          duration: 2,
          type: "spring",
        }}
        whileTap={{ opacity: 1, scale: 2 }}
        drag
      >
        <div className="flex items-center justify-center border-double border-collapse">
          <Image src="/next.svg" width={200} height={200}></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/Expressjs.png" width={200} height={200}></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/nodejs.png" width={200} height={200}></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/react.png" width={200} height={200}></Image>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/tailwind.png" width={200} height={200}></Image>
        </div>
      </motion.div>
      {/* )} */}
    </motion.div>
  );
};

export default FrameMotion;
