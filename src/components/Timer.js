import React from 'react';

const Timer = props => {
  const {time} = props;
  return(
    <div className="Timer">
      {time}
      <div className="controls">
        <button id="play" name="play">Play</button>
        <button id="stop" name="stop">Stop</button>
      </div>
    </div>
  )
}

export default Timer;
