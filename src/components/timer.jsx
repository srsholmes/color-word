let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { shuffle } from '../modules';


let Timer = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  

  render(){
    var timerStyle = {
      width: this.props.timer + '%'
    }
    return (
      <div className="timer-wrap">
        <div style={timerStyle} className="bar"></div>
        <p>Timer</p>
      </div>
    )
  }
});

export default Timer;


