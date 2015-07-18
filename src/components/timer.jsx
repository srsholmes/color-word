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

  chooseColor(i, shuffledColors, correctColor) {
    shuffledColors[i] == correctColor ? alert('correct') : alert('incorrect')
  },

  render(){
    return (
      <div className="timer-wrap">
        <p>Timer</p>
      </div>
    )
  }
});

export default Timer;
