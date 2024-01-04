import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter);
  };
  const removeValue = () => {
    setCounter(counter - 1)
    console.log(counter)
  }
  return (
    <>
      <h1>My React Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
