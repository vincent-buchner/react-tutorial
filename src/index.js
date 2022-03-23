import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`checked: ${checked.toString()}`)
  })
  
  return(
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {/* IF the variable checked is true, write "checked". Otherwise, write "Not Checked"  */}
      {checked ? "checked" : "Not Checked"}
    </>
  );
}

function App() {
  return <Checkbox />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
