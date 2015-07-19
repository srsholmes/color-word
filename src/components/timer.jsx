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
    return { elapsed: 0 };
  },
  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(this.tick, 10);
  },
  clearTimer() {
    console.log('clearTimer');
    clearInterval(this.timer);
  },
  tick() {
    Actions.setTick(( new Date() - this.props.start ));
    // this.setState({ elapsed: new Date() - this.props.start });
  },
  
  render(){
    var elapsed = this.props.elapsed / 100;
    var seconds = (elapsed / 10).toFixed(10);  
    var totalTime = 2;
    var percentageTime = (seconds / totalTime) * 100;
    console.log(percentageTime);
    if (percentageTime >= 100) {
      this.clearTimer();
      console.log('OVER 100! ' + percentageTime);
      percentageTime = 100;
      // Actions.incorrectAnswer();
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
