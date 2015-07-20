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

  getInitialState() {
    return { elapsed: 0 };
  },
  componentDidMount() {
    console.log('componentDidMount');
    this.tick();
  },

  componentWillReceiveProps() {
    this.tick();
  },

  clearTimer() {
    console.log('clearTimer');
    clearInterval(this.tick);
  },
  tick() {
    console.log('tick');
    var tickCount = this.props.elapsed;

    console.log(tickCount);
    tickCount ++;
    if (tickCount >= 300) {
      console.log('over 3000!');
      //Handle when the user runs our of time.
      return;
    } else {
      Actions.setTick(( tickCount ));  
    }
  },
  
  render(){
    // var elapsed = Math.round(this.state.elapsed / 100);
    var elapsed = this.state.elapsed;
    var seconds = (elapsed / 100).toFixed(10);
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
