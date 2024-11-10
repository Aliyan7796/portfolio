import { useState, useEffect } from "react";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Tech from "./components/tech";
import Experience from "./components/experience";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
   
  };
  

  return (
    <>
      <div className={"fixed -z-10 w-full min-h-screen"} style={{
          background: isDarkMode
            ? 'radial-gradient(125% 125% at 50% 20%, rgba(0, 0, 0, 1) 50%, rgba(15, 10, 222, 1) 100%)'
            :  '',
        }}></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Hero />
        <Tech />
        <Projects />
        <Experience/>
        <Contact />
      </main>
    </>
  );
}

export default App;