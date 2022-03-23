import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({library, message, number}) {
  return(
    <div>
      <h1>Hello {library}!</h1>
      <p>{message}</p>
      <p>This is a number: {number}. Cool right?</p>
    </div>
  );
}

ReactDOM.render(
  <Hello library="React" message="Hello world!" number={7} />,
  document.getElementById('root')
);

