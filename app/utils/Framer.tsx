import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
}

const FramerText = ({ children }: Props) => {
  const textWelcome = {
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  // const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        variants={textWelcome}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FramerText;
