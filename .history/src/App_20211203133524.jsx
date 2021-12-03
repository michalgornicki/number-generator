import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  return (
    <p>
      <div
        className="button"
        onClick={() => setState([...state, Math.floor(Math.random() * 10)])}
      >1-10</div>
      <div
        className="button"
        onClick={() => setState([...state, Math.floor(Math.random() * 100)])}
      >1-100</div>
      <div
        className="button"
        onClick={() => setState([...state, Math.floor(Math.random() * 1000)])}
      ></div>
      <div className="map">
        {state.map((item) => {
          return <div className="map-item">{item}</div>;
        })}
      </div>
    </p>
  );
}

export default App;
