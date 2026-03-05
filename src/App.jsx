import { useState } from "react";
import Box from "./components/Box";
import "./App.css";
import ThemeContext from "./contexts/ThemeContexts";

function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = ({ target }) => {
    setTheme(target.checked ? "dark" : "light");
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
