import React, {Component} from 'react'
import {TIME_DURATION} from '../constants/constants';
import { percentageTime } from '../modules'

export class Timer extends Component {
  componentDidMount() {
    this.props.actions.startTimer();
  }
  render() {
    const {timer, difficulty} = this.props;
    const percentTime = percentageTime(timer.elapsed, TIME_DURATION, difficulty)
    const timerStyle = {width: `${percentTime}%`}
    return (
      <div className="timer-wrap">
        <div style={timerStyle} className="bar"></div>
      </div>
    )
  }
}
