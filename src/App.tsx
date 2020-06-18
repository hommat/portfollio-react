import React from "react";

import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <Menu />
      <main>
        <Header />
      </main>
    </div>
  );
};

export default App;
