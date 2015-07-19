let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

let Timer = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

//Refactor to use state and actions/ stores. 
  getInitialState() {
    console.log('getInitialState');
    return { 
      elapsed: 0,
      start: Date.now()
    };
  },
  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(this.tick, 1);
  },
  startTimer() {
    //Need to set the state on the app using an action 
    //and let the date/timer filter down thrugh props. 
    this.setState({ elapsed: 0, start: Date.now() });
    console.log(this.state.elapsed);
    console.log(this.timer);
    this.timer = setInterval(this.tick, 1);
  },
  clearTimer() {
    clearInterval(this.timer);
  },
  tick() {
    console.log('tick');
    this.setState({ elapsed: new Date() - this.props.start });
  },
  
  render(){
    var elapsed = this.state.elapsed / 100;
    var seconds = (elapsed / 10).toFixed(10);  
    var totalTime = 2;
    var percentageTime = (seconds / totalTime) * 100;
    if (percentageTime >= 100) {
      // percentageTime = 100;
      this.clearTimer();
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
