import React from 'react';

const Timer = props => {
  const {time, handleClick} = props;
  return(
    <div className="Timer">
      {time}
      <div className="controls">
        <button id="play" name="play" onClick={handleClick}>Play/Pause</button>
      </div>
    </div>
  )
}

export default Timer;
