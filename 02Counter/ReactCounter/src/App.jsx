import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const incCount = () => {
    if (count < 20) {
      count += 1;
    }
    setCount(count);
    console.log("IN INC COUNTER", count);
  };
  const decCount = () => {
    if (count > 0) {
      count -= 1;
    }
    setCount(count);
    console.log("IN DEC COUNTER", count);
  };

  return (
    <>
      <div>
        <h1>COUNTER</h1>
        <h6>0 - 20</h6>
        <h2>Counter Value {count}</h2>
        <button type="button" onClick={incCount}>
          Increase
        </button>
        <button type="button" onClick={decCount}>
          Decrease
        </button>

        <p>After Operation Result {count}</p>
      </div>
    </>
  );
}

export default App;
