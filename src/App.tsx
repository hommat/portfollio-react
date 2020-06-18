import React from "react";

import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <Menu />
      <main>
        <Header />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default App;
