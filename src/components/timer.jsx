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

  componentWillReceiveProps(nextProps) {
    this.tick(nextProps);
  },

  startTimer() {
    console.log('startTimer');
    Actions.restartApp();
  },

  tick(nextProps) {
    console.log(nextProps);
    //Check if the app is restarting here.
    if (nextProps) {
      if (nextProps.ticking === false) {
        console.log('inside the if');
      }
    }
    console.log('tick');
    //Dont want to set these varibales every time!
    var timeStart = this.props.start;
    var propsElapsed = this.props.elapsed;
    var ticking = this.props.ticking;
    var elapsed = Date.now() - timeStart;
    console.log('timeStart', timeStart);
    console.log('propsElapsed', propsElapsed);
    console.log('ticking', ticking);
    console.log('elapsed', elapsed);

    if (ticking === false) return;
    if (ticking === true && elapsed < 4000) {
      Actions.setElapsed(elapsed);
    } else if ( elapsed > 4000) {
      console.log('elapsed > 4000');
      Actions.stopTimer();
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
