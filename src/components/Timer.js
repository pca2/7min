import React from 'react';

const Timer = props => {
  const {time, startTimer, stopTimer} = props;
  return(
    <div className="Timer">
      {time}
      <div className="controls">
        <button id="play" name="play" onClick={startTimer} >Play</button>
        <button id="stop" name="stop" onClick={stopTimer} >Stop</button>
      </div>
    </div>
  )
}

export default Timer;
