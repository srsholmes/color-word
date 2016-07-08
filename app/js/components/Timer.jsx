import React, {Component} from 'react'
let counter = 0;

import {TIME_DURATION} from '../constants/constants';
import { percentageTime } from '../modules'

export class Timer extends Component {
  componentDidMount() {
    this.props.actions.startTimer();
  }
  render() {
    const {timer, difficulty} = this.props;
    const {incorrectAnswerTasks, resetDifficultyTasks} = this.props.actions
    const percentTime = percentageTime(timer.elapsed, TIME_DURATION, difficulty)
    const timerStyle = {width: `${percentTime}%`}
    return (
      <div className="timer-wrap">
        <div style={timerStyle} className="bar"></div>
        <div><h4><a onClick={() => incorrectAnswerTasks()}>Click to play again</a></h4></div>
        <div><h4><a onClick={() => resetDifficultyTasks()}>Change difficulty</a></h4></div>
      </div>
    )
  }
}
