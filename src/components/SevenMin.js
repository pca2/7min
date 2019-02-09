import React from 'react';
import Exercise from './Exercise';
import Timer from './Timer';
import Button from './Button';
import ListDisplay from './ListDisplay';

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
const defaultTimerLength = 30;


class SevenMin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timerPosition: defaultTimerLength,
      displayText: exerciseList[0],
      position: 0,
      timerRunning: false,
      isBreak: false
    }
    this.toggleTimer = this.toggleTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.resetProgram = this.resetProgram.bind(this);
    this.takeBreak = this.takeBreak.bind(this);
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
      timerPosition: defaultTimerLength,
      displayText: exerciseList[0],
      isBreak: false
    })

  }

  takeBreak(){
    this.setState({
      displayText: 'Break',
      timerPosition: 5,
      isBreak: true
    })
  }
  
  tick(){
    this.setState((prevState) => ({
      timerPosition: prevState.timerPosition - 1
    }));
    
    const {timerPosition, displayText, position, isBreak} = this.state;

    if(timerPosition < 0){
      console.log("timerPosition has gotten down to zero")
      var nextExercise = exerciseList[position + 1]
      console.log(`nextExercise is ${nextExercise} and current exercise is ${displayText}`)
      if(!nextExercise){
        console.log("next excercise is falsy so I'm resetting program")
        this.resetProgram();
        return; 
      }
      if(isBreak){
        console.log(`Break was last run so I'm running next exercise, which is ${nextExercise} `)
        this.setState(prevState => ({
          timerPosition: defaultTimerLength, 
          displayText: nextExercise, 
          isBreak: false,
          position: prevState.position + 1
        }))
      } else {
        console.log(`${displayText} was just run some I'm takin' a break`)
        this.takeBreak()
      }
    };
  }



  
  render(){
    const {timerRunning, displayText, timerPosition} = this.state;
    let controls;
    if(timerRunning){
      controls = <Button handleClick={this.stopTimer} text="Stop"/> 
    } else {
      controls =  <Button handleClick={this.startTimer} text="Start"/>
    }
    return(
      <div className="SevenMin">
        <ListDisplay list={exerciseList} />
        <div className="exerciseTimer">
          <Exercise name={displayText} />
          <Timer timerPosition={timerPosition}/>
          {controls}
        </div>
      </div>
    )
  }
};


export default SevenMin;
