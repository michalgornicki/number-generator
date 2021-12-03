import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  return (
    <p>
      <div
        className="button"
        onClick={() => setState([...state, Math.floor(Math.random()*1)])}
      ></div>
      <div className="map">
        {state.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </p>
  );
}

export default App;
