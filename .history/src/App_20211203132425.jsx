import React, { useState } from 'react';
import './App.css';

function App() {

const [state, setState] = useState([1, 2, 3]);


  return (
    <p>
      <div className="button" onClick={() => setState([...state, Math.random()])}></div>
      <div>{state.map((item) => ()

      )}</div>
    </p>
  );
}

export default App;
