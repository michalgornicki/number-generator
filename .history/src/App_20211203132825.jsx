import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([1, 2, 3]);

  return (
    <p>
      <div
        className="button"
        onClick={() => setState([...state, Math.random()])}
      ></div>
      <div className="">
        {state.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </p>
  );
}

export default App;
