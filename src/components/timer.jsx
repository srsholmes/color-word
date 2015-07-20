let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

// var tickCount = 0;

//Stores
let Store = require('../stores/store');

let Timer = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  componentDidMount() {
    console.log('componentDidMount');
    this.tick();
  },

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    this.tick();
  },

  tick() {
    var timeStart = this.props.start;
    var elapsed = new Date() - timeStart;
    if (elapsed > 3000) {
      console.log('OVER 3000!');
      return;
    } else {
      Actions.setElapsed(elapsed);
    }
    console.log(elapsed);
  },

  render(){
    var elapsed = this.props.elapsed;
    var percentageTime = ((elapsed / 3000) * 100).toFixed(5);
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
