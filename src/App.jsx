import { useState } from "react";
import Box from "./components/Box";
import "./App.css";
import ThemeContext from "./contexts/ThemeContexts";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });
  const handleThemeChange = ({ target }) => {

    const newTheme = target.checked ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={theme}>
    <main className={theme}>
      <p>Theme Switcher</p>

      <Box/>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        Dark Mode
      </label>
    </main>
    </ThemeContext.Provider>
  );
}

export default App;
