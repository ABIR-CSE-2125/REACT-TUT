import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <div className="text-4xl text-white bg-rose-400 p-2 text-center m-2 rounded-xl ">
        Mega Project
      </div>
    </>
  );
}

export default App;
