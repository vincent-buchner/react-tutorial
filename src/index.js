import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  {id: "1", name:"Small Lake", trialhead:"Young Buck"},
  {id: "2", name:"Large Lake", trialhead:"Papa Bear"},
  {id: "3", name:"Deutsch See", trialhead:"Brot mit Käse"}
];

function App({lakes}) {
  return(
    // For each lake in the array, put it inside that JSX code
    <div>
      {lakes.map(lake => 
      <div key={lakes.id}>
        <h2>{lake.name}</h2>
        <p>Access Point: {lake.trialhead}</p>
      </div>)}
    </div>
  )
}

ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);

