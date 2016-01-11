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

  render(){
    var { timer, difficulty } = this.props;
    var percentageTime = ((timer.elapsed / TIME_DURATION[difficulty]) * 100).toFixed(5);
    var timerStyle = {
      width: percentageTime + '%'
    }
    return (
      <div className="timer-wrap">
        <div style={timerStyle} className="bar"></div>
        <a onClick={this.startTimer}>Click to play again</a>
      </div>
    )
  }
});

export default Timer;
