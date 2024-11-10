import { useState } from "react";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Tech from "./components/tech";
import Experience from "./components/experience";
import './styles.css'; // Import custom CSS file

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div
        className={`background-wrapper ${isDarkMode ? 'dark-mode' : ''}`}
      ></div>
      <main className="main-wrapper">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Hero />
        <Tech />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
