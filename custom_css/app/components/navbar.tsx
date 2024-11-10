import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDarkMode, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar__brand">Portfolio Website</a>
      <ul className="navbar__menu">
        <a href="#home" className="navbar__menu-item">Home</a>
        <a href="#tech" className="navbar__menu-item">Tech</a>
        <a href="#project" className="navbar__menu-item">Project</a>
        <a href="#experience" className="navbar__menu-item">Education</a>
        <a href="#contact" className="navbar__menu-item">Contact</a>
      </ul>
      <ul className="navbar__social">
        <a href="https://pk.linkedin.com/in/aliyanahmedqazi" target="_blank" rel="noopener noreferrer">
          <li className="navbar__social-item">
            <BsLinkedin />
          </li>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <li className="navbar__social-item">
            <BsGithub />
          </li>
        </a>
        <li className="navbar__theme-switcher">
          <label className="theme-switcher-label">
            <input
              type="checkbox"
              name="themeSwitcher"
              id="themeSwitcher"
              className="theme-switcher-input"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <div className="theme-switcher-container">
              <span className={`light-mode-icon ${isDarkMode ? '' : 'hidden'}`} />
              <span className={`dark-mode-icon ${isDarkMode ? 'hidden' : ''}`} />
            </div>
          </label>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="navbar__menu-toggle" onClick={menuOpen} />
      ) : (
        <BiMenu className="navbar__menu-toggle" onClick={menuOpen} />
      )}

      {isOpen && (
        <div className="navbar__mobile-menu">
          <ul className="navbar__mobile-links">
            <a href="#home" className="navbar__menu-item">Home</a>
            <a href="#tech" className="navbar__menu-item">Tech</a>
            <a href="#project" className="navbar__menu-item">Project</a>
            <a href="#experience" className="navbar__menu-item">Education</a>
            <a href="#contact" className="navbar__menu-item">Contact</a>
          </ul>
          <ul className="navbar__mobile-social">
            <a href="https://pk.linkedin.com/in/aliyanahmedqazi" target="_blank" rel="noopener noreferrer">
              <li className="navbar__social-item">
                <BsLinkedin />
              </li>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <li className="navbar__social-item">
                <BsGithub />
              </li>
            </a>
          </ul>
          <ul className="navbar__mobile-theme">
            <li>
              <label className="theme-switcher-label">
                <input
                  type="checkbox"
                  className="theme-switcher-input"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                />
                <div className="theme-switcher-container">
                  <span className={`light-mode-icon ${isDarkMode ? '' : 'hidden'}`} />
                  <span className={`dark-mode-icon ${isDarkMode ? 'hidden' : ''}`} />
                </div>
              </label>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
