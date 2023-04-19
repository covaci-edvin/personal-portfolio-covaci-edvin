import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./App.module.scss";
import NavBar from "./components/NavBar";
import Header from "./components/sections/header/Header";
import Education from "./components/sections/education/Education";
import Work from "./components/sections/work/Work";
import Experience from "./components/sections/experience/Experience";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/sections/footer/Footer";

function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <Header />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
