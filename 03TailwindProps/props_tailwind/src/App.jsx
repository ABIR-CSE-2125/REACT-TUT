import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-800 my-5">Hello People</h1>
      {/* <Card className="my-5" />
      <Card className="my-5" /> */}
      <Card
        url="https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        productName="Laptop"
        hashtags={["Laptop", "Electronis"]}
      />
      <Card
        url="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        productName="Sneakers"
        hashtags={["Fashion", "Sprk", "Casual"]}
      />
    </>
  );
}

export default App;
