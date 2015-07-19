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
    // this.timer = setInterval(this.tick, 10);
    this.tick();
  },
  clearTimer() {
    console.log('clearTimer');
    clearInterval(this.timer);
  },
  tick() {
    this.timer = setTimeout(() =>{
      console.log(tickCount);
      tickCount++;
      if (tickCount < 300) {
        this.tick();
        Actions.setTick(( tickCount ));
      } else {
        Actions.incorrectAnswer();
        return
      } 
    }, 10)
    // Actions.setTick(( new Date() - this.props.start ));
    // var self = this;
    // this.interval = setTimeout(function() {
    //   if (self.props.status.isStop()) {
    //     self.interval = undefined;
    //     return;
    //   }
    //   self.setState({timeLeft: self.state.timeLeft - 1});
    //   if (self.state.timeLeft <= 0) {
    //     self.setState({timeLeft: self.defaultTimeout});
    //     self.handleTimeout();
    //   }
    //   self._tick();
    // }, 1000);
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
