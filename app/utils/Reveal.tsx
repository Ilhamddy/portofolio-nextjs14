"use client";
import { motion } from "framer-motion";
import "./styles.scss";

export default function Reveal({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },

    enter: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 1,
    },
  };

  return (
    <div className="inner">
      <motion.div {...anim(opacity)}>{children}</motion.div>
    </div>
  );
}
