import React, { useState } from 'react';
import './App.css';

function App() {

const [state, setState] = useState([]);


  return (
    <p>
      <div className="button" onClick={setState()}></div>
    </p>
  );
}

export default App;
