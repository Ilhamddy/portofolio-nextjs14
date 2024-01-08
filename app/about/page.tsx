"use client";
import React from "react";
import AboutMe from "./components/aboutme";
import AboutImage from "./components/aboutimage";
import AboutWord from "./components/aboutword";
import Aboutvalues from "./components/aboutvalues";
import AboutContact from "./components/aboutcontact";
import Reveal from "../utils/Reveal";

const PageAbout = () => {
  return (
    <Reveal>
      <AboutMe />
      {/* <AboutImage /> */}
      <AboutWord />
      <Aboutvalues />
      <AboutContact />
    </Reveal>
  );
};

export default PageAbout;
