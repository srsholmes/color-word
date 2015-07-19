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

//Refactor to use state and actions/ stores. 
  getInitialState() {
    console.log('getInitialState');
    return { elapsed: 0 };
  },
  componentDidMount() {
    console.log('componentDidMount');
    this.tick();
  },
  clearTimer() {
    console.log('clearTimer');
    clearInterval(this.timer);
  },
  tick() {
    console.log('tick');
    this.timer = setTimeout(() =>{
      console.log(tickCount);
      tickCount ++;
      if (tickCount < 300) {
        this.tick();
        Actions.setTick(( tickCount ));
      } else {
        // Actions.incorrectAnswer();
        clearTimeout(this.timer);
        // this.clearInterval();
        return
      } 
    }, 10)
    //1000 ticks in a second
  },
  
  render(){
    var elapsed = this.props.elapsed;
    var totalTime = 300;
    var percentageTime = (elapsed / totalTime) * 100;

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
