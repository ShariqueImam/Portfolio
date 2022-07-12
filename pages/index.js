import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Info from "../components/Info/Info";
const App = (props) => {
  return (
    <div className="g overflow-x-hidden">
      <Home />
      <Info />
      <Projects />
      <Skills />
      <div className="bg-[rgba(0,0,0,0.7)]">

      <Contact />
      </div>
    </div>
  );
};

export default App;
