import { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "";
  }, [darkMode]);

  return (
    <header>
      <img
        src="https://img.freepik.com/free-vector/tech-computer-logo-template_23-2149204144.jpg?w=2000"
        alt="Computer Logo"
        width="100"
        height="100"
      />
      <h1>Evolution of Computers</h1>
      <button id="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
