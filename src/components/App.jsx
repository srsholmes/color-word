let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { Game, Timer, Score } from './';

import { colors } from '../modules';

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    return {
      score: 0
    };
  },

  render(){
    var colorsArray = colors();
    var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    return (
      <div>
        <h1>Colour Word - <span>choose the colour, not the word.</span></h1>
        <Game colors={colorsArray} correctColor={correctColor}/>
        <Timer/>
        <Score score={this.state.score}/>
      </div>
    )
  }
});

export default App;
