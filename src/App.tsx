import React from "react";

import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Menu />
      <main>
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
