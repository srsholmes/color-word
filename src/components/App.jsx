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
    //Make colors an object with the material colors to match the css. 
    var colorsArray = colors();
    var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    return {
      colors: colorsArray,
      correctColor: correctColor,
      score: 0,
      start: Date.now(),
      elapsed: 0,
      ticking: true
    };
  },

  render(){
    console.log('APP TIMER', this.state.start);
    return (
      <div>
        <h1>Colour Word - <span>choose the colour, not the word.</span></h1>
        <Game colors={this.state.colors} correctColor={this.state.correctColor}/>
        <Timer ticking={this.state.ticking} start={this.state.start} elapsed={ this.state.elapsed }/>
        <Score score={this.state.score}/>
      </div>
    )
  }
});

export default App;
