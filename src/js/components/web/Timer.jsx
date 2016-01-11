import React from 'react';
let counter = 0;

import { TIME_DURATION } from '../../constants/constants';

let Timer = React.createClass({
  componentDidMount() {
    this.props.startTimer();
  },

  startTimer() {
    this.props.incorrectAnswerTasks();
  },

  changeDifficulty() {
    this.props.resetDifficultyTasks();
  },

  render(){
    var { timer, difficulty } = this.props;
    console.log(difficulty);
    var percentageTime = ((timer.elapsed / TIME_DURATION[difficulty]) * 100).toFixed(5);
    console.log(percentageTime);
    var timerStyle = {
      width: `${percentageTime}%`
    }
    return (
      <div className="timer-wrap">
        <div style={timerStyle} className="bar"></div>
        <div><h4><a onClick={this.startTimer}>Click to play again</a></h4></div>
        <div><h4><a onClick={this.changeDifficulty}>Change difficulty</a></h4></div>
      </div>
    )
  }
});

export default Timer;
