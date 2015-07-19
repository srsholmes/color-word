let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

var tickCount = 0;

//Stores
let Store = require('../stores/store');

let Timer = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return { elapsed: 0 };
  },
  componentDidMount() {
    console.log('componentDidMount');
    setInterval(this.tick, 10)
  },

  clearTimer() {
    console.log('clearTimer');
    clearInterval(this.tick);
  },
  tick() {
    console.log('tick');
    tickCount ++;
    console.log(tickCount);
    if (tickCount >= 300) {
      alert('fuck')
      return;
    } else {
      Actions.setTick(( new Date() - this.props.start ));  
    }
  },
  
  render(){
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(10)
    var totalTime = 3;
    var percentageTime = (seconds / totalTime) * 100;

    if (percentageTime >= 100) {
      percentageTime = 100;
    } 
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
