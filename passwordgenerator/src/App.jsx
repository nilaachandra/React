import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passwordRef = useRef(null)

//passwordgenerator logic
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`{}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //copy function
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,28);
    window.navigator.clipboard.writeText(password)
  }, [password]) 

  
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md shadow-md flex justify-center align-middle flex-col rounded-lg p-4 bg-gray-700">
        <h1 className="text-4xl text-white font-[Monospace]">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
          <input
            type="text"
            name=""
            id=""
            value={password}
            className="outline-none w-full text-center"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="p-4 w-30 bg-black text-white" onClick={copyPassword}>Copy</button>
        </div>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className="curson-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label className="text-white">Length:{length}</label>
        <div className="flex gap-2 justify-center align-middle">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className=""
          />
          <label htmlFor="numberInput" className="text-white">
            Numbers
          </label>
        </div>
        <div className="flex gap-2 justify-center align-middle">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className=""
          />
          <label htmlFor="charInput" className="text-white">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
