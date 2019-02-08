import React from 'react';

const Timer = props => {
  const {timerPosition} = props;
  return(
    <div className="Timer">
      {timerPosition}
    </div>
  )
}

export default Timer;
