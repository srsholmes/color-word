let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

var counter = 0;

//Stores
let Store = require('../stores/store');

let Timer = React.createClass({

  componentDidMount() {
    console.log('componentDidMount');
    this.tick();
  },

  componentWillReceiveProps() {
    this.tick();
  },

  startTimer() {
    Actions.incorrectAnswer();
  },

  tick() {
    var timeStart = this.props.start;
    var elapsed = new Date - timeStart;
    //if elapsed is less than 1, do the new date otherwise use the props.

    if (elapsed > 4000) {
      console.log('over 4000');
      // Actions.setElapsed(elapsed);
      
      // counter++
      // console.log(counter);
      // if(counter > 5) return;
      // Actions.incorrectAnswer();
    } else {
      Actions.setElapsed(elapsed);
    }
  },

  render(){
    var elapsed = this.props.elapsed;
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
