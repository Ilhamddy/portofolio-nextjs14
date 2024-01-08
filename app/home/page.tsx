import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Project from "./components/project";
import Expertise from "./components/expertise";
import Reveal from "../utils/Reveal";
// import SliderProject from "../slider/component/projectSlider";
// import Contact from "./components/contact";

const HomePage = () => {
  return (
    <Reveal>
      <Header />
      {/* <Project /> */}
      <About />
      <Project />
      {/* <FrameMotion /> */}
      <Expertise />
      {/* <Contact /> */} 
    </Reveal>
  );
};

export default HomePage;
