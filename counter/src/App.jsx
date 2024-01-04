import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
    if (counter === 20) {
      alert("Counter Limit Reached");
      counter = 0
    }
  };
  const removeValue = () => {
    setCounter(counter - 1)
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
