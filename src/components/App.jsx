let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { Game, Timer, Score } from './';

// import { colors } from '../modules';

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    //Make colors an object with the material colors to match the css. 
    var colors = ['blue', 'red', 'green', 'orange'];
    var correctColor = colors[Math.floor(Math.random() * colors.length)];

    return {
      colors: colors,
      correctColor: correctColor,
      score: 0
    };
  },

  render(){
    return (
      <div>
        <h1>Colour Word - <span>choose the colour, not the word.</span></h1>
        <Game colors={this.state.colors} correctColor={this.state.correctColor}/>
        <Timer/>
        <Score score={this.state.score}/>
      </div>
    )
  }
});

export default App;
