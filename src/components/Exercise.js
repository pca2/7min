import React from 'react';

const Exercise = props => {
  const {name} = props;
  return(
    <div className="Exercise">
      <h1>{name}</h1>
    </div>
  )
}

export default Exercise;
