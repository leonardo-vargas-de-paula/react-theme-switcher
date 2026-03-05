import { useState } from "react";
import Box from "./components/Box";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = ({ target }) => {
    setTheme(target.checked ? "dark" : "light");
  };
  return (
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
  );
}

export default App;
