import React, { useEffect } from "react";
import AOS from "aos";
import { ThemeProvider } from "styled-components";
import "aos/dist/aos.css";

import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu />
      <Header />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
