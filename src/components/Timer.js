import React from 'react';

const Timer = props => {
  const {time} = props;
  return(
    <div className="Timer">
      {time}
    </div>
  )
}

export default Timer;
