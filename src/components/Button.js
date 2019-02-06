import React from 'react';

const Button = props => (
  <div className="Button">
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
);

export default Button;
