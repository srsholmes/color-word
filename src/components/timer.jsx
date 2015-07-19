let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

var DEFAULT_TIMEOUT = 60;

let Timer = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    console.log('getInitialState');
    return { elapsed: 0 };
  },
  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(this.tick, 50);
  },
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  },
  tick() {
    console.log('tick');
    this.setState({elapsed: new Date() - this.props.start});
  },
  
  render(){
    var timerStyle = {
      width: this.state.timer + '%'
    }
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(1);  
    return (
      <div className="timer-wrap">
        <p>{seconds}</p>
      </div>
    )
  }
});

export default Timer;


