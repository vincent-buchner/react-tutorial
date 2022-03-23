import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = ["Big Lake", "Small Lake", "Deutsch Lake"];

function App({lakes}) {
  return(
    // For each lake in the array, put it inside that JSX code
    <ul>
      {lakes.map(lake => <li>{lake}</li>)}
    </ul>
  )
}

ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);

