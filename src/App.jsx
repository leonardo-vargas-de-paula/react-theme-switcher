import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  return <main className={theme}>
      oi
    </main>;
}

export default App;
