import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme.js";
import ThemeBtn from "./components/ThemeButton.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  // const [modeText, setModeText] = useState("Dark");
  const lightTheme = () => {
    setThemeMode("light");
    // setModeText("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
    // setModeText("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {" "}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
