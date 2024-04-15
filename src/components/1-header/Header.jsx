import Menu from "./menu/Menu";
import "./Header.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const clickHandler = () => {
    setShowMenu(true);
  };
  const [theme, setTheme] = useState(localStorage.getItem("mode") ?? "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  const themeHandler = () => {
    localStorage.setItem("mode", theme === "dark" ? "light" : "dark");

    setTheme(localStorage.getItem("mode"));
  };

  return (
    <header>
      <button className="menu-btn" onClick={clickHandler}>
        <i className="fa-solid fa-bars "></i>
      </button>

      <AnimatePresence>
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </AnimatePresence>

      <div />
      <div className="middle-nav">
        <nav className="horizontal-nav">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="#proj">Projects</a>
            </li>
            <li>
              <a href="#cont">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <button className="light-btn" onClick={themeHandler}>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
      </button>
    </header>
  );
}
