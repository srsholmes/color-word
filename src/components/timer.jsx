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
    if (ticking === false) {
      console.log('the ticker is false');
      //set ticker to true and another elapsed
      elapsed = this.props.elased;
      Actions.setElapsed(elapsed);
    }
  },

  tick() {
    var timeStart = this.props.start;
    var propsElapsed = this.props.elapsed;
    var ticking = this.props.ticking;
    var elapsed = Date.now() - timeStart;
    
    if (ticking === true && elapsed < 4000) {
      Actions.setElapsed(elapsed);
    } else {
      console.log('lets stop the timer');
      Actions.stopTimer();
    }
    console.log('timeStart', timeStart);
    console.log('propsElapsed', propsElapsed);
    console.log('elapsed', elapsed);
    //if elapsed is less than 1, do the new date otherwise use the props.

    // if (elapsed > 4000) {
    //   console.log('over 4000');
    //   // Actions.setElapsed(elapsed);

    //   // counter++
    //   // console.log(counter);
    //   // if(counter > 5) return;
    //   // Actions.incorrectAnswer();
    // } else {
    //   Actions.setElapsed(elapsed);
    // }
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
