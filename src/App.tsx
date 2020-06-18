import React from "react";

import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Menu />
      <main>
        <Header />
        <Skills />
      </main>
    </div>
  );
};

export default App;
