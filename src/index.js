import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello() {
  return(
    <div>
      <h1>Hello React!</h1>
      <p>This is a sample from the the Linkedin Learning course on React! How am I doing? </p>
    </div>
  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

