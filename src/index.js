import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
  return(
      <h1>Visit The Lake!</h1>
  )
}

function SkiResort() {
  return(
      <h1>Visit The Ski Resort Today!</h1>
  )
}

function App({name}) {
  return(
    <>
      <h1 style={{color: "blue"}}>{name}</h1>
      <Lake />
      <SkiResort />
    </>
  );
}

ReactDOM.render(
  <App name="React" />,
  document.getElementById('root')
);

const [first, second] = [
  "mangos",
  "mike and ikes",
  "pineapple"
];
console.log(first)
console.log(second)