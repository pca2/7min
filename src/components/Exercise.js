import React from 'react';

const Exercise = props => {
  const {name} = props;
  return(
    <div className="Exercise">
      {name}
    </div>
  )
}

export default Exercise;
