import { useState, useEffect } from "react";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Tech from "./components/tech";
import Experience from "./components/experience";

function App() {
  // Load dark mode preference from localStorage or default to false
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("isDarkMode");
      return savedTheme === "true"; // Return saved theme or default to false
    }
    return false;
  });

  // Toggle dark mode and save to localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode.toString()); // Save the theme to localStorage
      return newMode;
    });
  };

  // Apply dark class to the body if dark mode is enabled
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div
        className={`fixed -z-10 w-full min-h-screen bg-gradient-to-r ${
          isDarkMode
            ? "from-black via-black to-indigo-800" // Dark gradient
            : "from-white via-gray-200 to-indigo-300" // Light gradient
        }`}
      ></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
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
