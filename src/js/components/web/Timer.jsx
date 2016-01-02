import React from 'react';
let counter = 0;

let Timer = React.createClass({
  componentDidMount() {
    console.log('start timer');
    // Actions.startTimer();
  },

  render(){
    var { elapsed } = this.props;
    var percentageTime = ((elapsed / 4000) * 100).toFixed(5);
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
