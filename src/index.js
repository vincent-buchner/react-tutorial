import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}) {
  return(
    <div>
      <h1>Visit The {name}!</h1>
    </div>
  )
}

function SkiResort({name}) {
  return(
    <div>
      <h1>Visit The {name} Today!</h1>
    </div>
  )
}

function App(props) {
  if (props.seasons === "summer") {
    return <Lake name="Big Lake" />
  } else if(props.seasons === "winter") {
    return <SkiResort name="High Rise" />
  }
}

ReactDOM.render(
  <App seasons="summer" />,
  document.getElementById('root')
);

