import React from 'react';
let counter = 0;

let Timer = React.createClass({
  componentDidMount() {
    console.log('componentDidMount');
    this.props.startTimer();
  },

  startTimer() {
    console.log('play again clicked');
  },

  render(){
    var { timer } = this.props;
    var percentageTime = ((timer.elapsed / 4000) * 100).toFixed(5);
    var timerStyle = {
      width: percentageTime + '%'
    }
    return (
      <div className="timer-wrap">
        <div style={timerStyle} className="bar"></div>
        <a onClick={this.startTimer}>Play again?</a>
      </div>
    )
  }
});

export default Timer;
