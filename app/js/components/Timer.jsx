import React, {Component} from 'react'
let counter = 0;

import {TIME_DURATION} from '../constants/constants';

export class Timer extends Component {
  componentDidMount() {
    this.props.actions.startTimer();
  }

  startTimer() {
    this.props.actions.incorrectAnswerTasks();
  }

  changeDifficulty() {
    this.props.actions.resetDifficultyTasks();
  }

  render() {
    var {timer, difficulty} = this.props;
    var percentageTime = ((timer.elapsed / TIME_DURATION[difficulty]) * 100).toFixed(5);
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
}
;

