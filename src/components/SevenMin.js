import React from 'react';
import Exercise from './Exercise';
import Timer from './Timer';
import Controls from './Controls';
import Button from './Button';

const exerciseList = [
  'Center Shoulders',
  'Front Shoulders',
  'Back Shoulders',
  'Right Suitcase',
  'Left Suitcase',
  'Swing',
  'Pushups',
  'Sit-ups'
];
const timerLength = 30;


class SevenMin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: timerLength,
      activity: exerciseList[0],
      timerRunning: false
    }
    this.toggleTimer = this.toggleTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.resetProgram = this.resetProgram.bind(this);
  };
  
  toggleTimer(){
    this.setState(prevState => ({
      timerRunning: !prevState.timerRunning
    }));
  }
  
  startTimer(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
    this.toggleTimer();
  };
  
  stopTimer(){
    clearInterval(this.timerID);
    this.toggleTimer();
  }
  resetProgram(){
    this.stopTimer();
    this.setState({
      time: timerLength,
      activity: exerciseList[0]
    })

  }
  
  tick(){
    if(this.state.time <= 1){
      this.stopTimer();
    };
    this.setState((prevState) => ({
      time: prevState.time - 1
    }))
  }


  
  render(){
    let controls;
    if(this.state.timerRunning){
      controls = <Button handleClick={this.stopTimer} text="Stop"/> 
    } else {
      controls =  <Button handleClick={this.startTimer} text="Start"/>
    }
    return(
      <div className="SevenMin">
        <Exercise name={this.state.activity} />
        <Timer time={this.state.time}/>
        {controls}
      </div>
    )
  }
};


export default SevenMin;
