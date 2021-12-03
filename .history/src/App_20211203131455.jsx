import React, { useState } from 'react';
import './App.css';

function App() {

const [state, setState] = useState([]);


  return (
    <p>
      <div className="button" onClick={() => setState(state.push(1))}></div>
      <div>{state}</div>
    </p>
  );
}

export default App;
