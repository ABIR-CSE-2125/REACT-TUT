import { useState } from "react";
import "./App.css";

function App() {
  const color = [
    { name: "red", hexCode: "#E11748" },
    { name: "blue", hexCode: "#22D3EE" },
    { name: "green", hexCode: "#4ADE80" },
    { name: "yellow", hexCode: "#FBBF24" },
    { name: "orange", hexCode: "#FB923C" },
    { name: "purple", hexCode: "#D946EF" },
    { name: "white", hexCode: "#A3A3A3" },
  ];

  const [currentColor, setCurrentColor] = useState("#A3A3A3");

  const changeColor = (newColor) => {
    setCurrentColor(newColor);
  };
  return (
    <>
      <div
        className=" w-full h-screen"
        style={{ backgroundColor: currentColor }}
      >
        <div className=" fixed flex flex-wrap bottom-14 inset-x-16 px-3 py-2 bg-stone-100 justify-center ">
          {color.map((c) => (
            <button
              type="button"
              className="rounded-md mx-4 px-3 py-2 text-sm font-semibold text-white justify-items-center "
              style={{ backgroundColor: c.hexCode }}
              onClick={() => changeColor(c.hexCode)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
