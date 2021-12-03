import React, { useState } from 'react';
import './App.css';

function App() {

const [state, setState] = useState(0);


  return (
    <p>
      <div className="button" onClick={() => setState(state + 1)}></div>
      <div></div>
    </p>
  );
}

export default App;
