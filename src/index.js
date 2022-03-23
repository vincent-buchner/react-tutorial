import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props) {
  console.log(Object.keys(props))
  return(
    <div>
      <h1>Hello {props.library}!</h1>
      <p>{props.message}</p>
      <p>This is the number of props: {Object.keys(props).length}. Cool right?</p>
    </div>
  );
}

ReactDOM.render(
  <Hello library="React" message="Hello world!" number={7} />,
  document.getElementById('root')
);

