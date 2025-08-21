import { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <header>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;