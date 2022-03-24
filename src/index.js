import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
  const [val, setVal] = useState("")
  const [val2, setVal2] = useState("")

  useEffect(() => {
    console.log(`Field 1: ${val}`)
  }, [val])

  useEffect(() => {
    console.log(`Field 2: ${val2}`)
  }, [val2])

  return(
    <>
      <label>
        <h1>Favorite Phrase</h1>
        <input value={val} onChange={change => setVal(change.target.value)}/>
      </label>
      <br />
      <label>
        <h1>Second Favorite Phrase</h1>
        <input value={val2} onChange={change => setVal2(change.target.value)}/>
      </label>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
