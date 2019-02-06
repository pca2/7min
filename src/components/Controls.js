import React from 'react';

const Controls = props =>{
  if(props.timerRunning){
    return(
      <div className="Controls">
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetProgram}>Reset</button>
      </div>
    )
   } else {
    return(
      <div className="Controls">
        <button onClick={this.startTimer}>Start</button>
      </div>
    )
   }
}


export default Controls;
