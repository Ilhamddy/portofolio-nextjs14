"use client";
import React from "react";
import Projectme from "./components/project";
import AllProject from "./components/allproject";
import ContactProject from "./components/contactproject";
import Reveal from "../utils/Reveal";

const PageProject = () => {
  return (
    <Reveal>
      <Projectme />
      <AllProject />
      <ContactProject />
    </Reveal>
  );
};

export default PageProject;
