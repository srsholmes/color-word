let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

var counter = 0;

//Stores
let Store = require('../stores/store');

let Timer = React.createClass({

  componentDidMount() {
    Actions.startTimer();
  },

  render(){
    var { elapsed } = this.props;
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
