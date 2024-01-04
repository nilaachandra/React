import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    if (counter === 25) {
      alert("Counter Limit Reached");
      setCounter(counter);
    }
  };
  const removeValue = () => {
    setCounter(counter - 1);
    if (counter === 0) {
      alert("counter cannot be negative");
      setCounter(0);
    }
  };
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
